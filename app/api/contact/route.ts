import { NextResponse } from 'next/server';
import { connect } from 'node:tls';

export const runtime = 'nodejs';

type ContactPayload = {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  solutionArea?: string;
  message?: string;
  source?: string;
  website?: string;
};

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  to: string;
  domain: string;
  rejectUnauthorized: boolean;
};

function getSmtpConfig(): SmtpConfig {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO ?? user;

  if (!host || !user || !pass || !to) {
    throw new Error('Missing SMTP configuration');
  }

  return {
    host,
    port: Number(process.env.SMTP_PORT ?? 465),
    user,
    pass,
    from: process.env.SMTP_FROM ?? user,
    to,
    domain: process.env.MAIL_DOMAIN ?? user.split('@')[1] ?? host,
    rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED !== 'false',
  };
}

function cleanHeader(value: string) {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

function cleanBody(value?: string) {
  return String(value ?? '').replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();
}

function encodeBase64(value: string) {
  return Buffer.from(value, 'utf8').toString('base64');
}

function dotStuff(value: string) {
  return value
    .split('\n')
    .map((line) => (line.startsWith('.') ? `.${line}` : line))
    .join('\r\n');
}

function createMessage(payload: Required<Omit<ContactPayload, 'website'>>) {
  const subject = cleanHeader(`Website message - ${payload.solutionArea}`);
  const replyName = cleanHeader(payload.fullName);
  const replyEmail = cleanHeader(payload.email);
  const body = [
    'New website message for Gelagay Business PLC',
    '',
    `Source: ${payload.source}`,
    `Full Name: ${payload.fullName}`,
    `Company: ${payload.companyName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Solution Area: ${payload.solutionArea}`,
    '',
    'Message:',
    payload.message,
  ].join('\n');

  return {
    subject,
    replyTo: `${replyName} <${replyEmail}>`,
    body,
  };
}

function createMessageId(domain: string) {
  const timestamp = Date.now();
  const random = Math.random().toString(36).slice(2);

  return `<website-contact-${timestamp}-${random}@${cleanHeader(domain)}>`;
}

async function sendSmtpMail(config: SmtpConfig, payload: Required<Omit<ContactPayload, 'website'>>) {
  const socket = connect({
    host: config.host,
    port: config.port,
    servername: config.host,
    rejectUnauthorized: config.rejectUnauthorized,
  });

  socket.setEncoding('utf8');

  let buffer = '';

  const readResponse = () =>
    new Promise<string>((resolve, reject) => {
      const onData = (chunk: string) => {
        buffer += chunk;
        const lines = buffer.split(/\r?\n/).filter(Boolean);
        const lastLine = lines.at(-1);

        if (lastLine && /^\d{3} /.test(lastLine)) {
          socket.off('data', onData);
          socket.off('error', onError);
          const response = buffer;
          buffer = '';
          resolve(response);
        }
      };

      const onError = (error: Error) => {
        socket.off('data', onData);
        reject(error);
      };

      socket.on('data', onData);
      socket.once('error', onError);
    });

  const command = async (line: string, expectedCodes: number[]) => {
    socket.write(`${line}\r\n`);
    const response = await readResponse();
    const code = Number(response.slice(0, 3));

    if (!expectedCodes.includes(code)) {
      throw new Error(`SMTP command failed with ${code}`);
    }
  };

  try {
    const greeting = await readResponse();
    const greetingCode = Number(greeting.slice(0, 3));

    if (greetingCode !== 220) {
      throw new Error(`SMTP greeting failed with ${greetingCode}`);
    }

    await command(`EHLO ${config.host}`, [250]);
    await command('AUTH LOGIN', [334]);
    await command(encodeBase64(config.user), [334]);
    await command(encodeBase64(config.pass), [235]);
    await command(`MAIL FROM:<${config.from}>`, [250]);
    await command(`RCPT TO:<${config.to}>`, [250, 251]);
    await command('DATA', [354]);

    const message = createMessage(payload);
    const email = [
      `Date: ${new Date().toUTCString()}`,
      `Message-ID: ${createMessageId(config.domain)}`,
      `From: Gelagay Business PLC <${cleanHeader(config.from)}>`,
      `Sender: ${cleanHeader(config.from)}`,
      `To: ${cleanHeader(config.to)}`,
      `Reply-To: ${message.replyTo}`,
      `Subject: ${message.subject}`,
      'X-Mailer: Gelagay Business PLC Website',
      'Auto-Submitted: no',
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=UTF-8',
      'Content-Transfer-Encoding: 8bit',
      '',
      dotStuff(message.body),
      '.',
    ].join('\r\n');

    socket.write(`${email}\r\n`);

    const dataResponse = await readResponse();
    const dataCode = Number(dataResponse.slice(0, 3));

    if (dataCode !== 250) {
      throw new Error(`SMTP DATA failed with ${dataCode}`);
    }

    await command('QUIT', [221]);
  } finally {
    socket.end();
  }
}

function normalizePayload(payload: ContactPayload): Required<Omit<ContactPayload, 'website'>> {
  return {
    fullName: cleanBody(payload.fullName),
    companyName: cleanBody(payload.companyName) || 'Not provided',
    email: cleanBody(payload.email),
    phone: cleanBody(payload.phone) || 'Not provided',
    solutionArea: cleanBody(payload.solutionArea) || 'General inquiry',
    message: cleanBody(payload.message),
    source: cleanBody(payload.source) || 'Website contact form',
  };
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    if (payload.website) {
      return NextResponse.json({ ok: true });
    }

    const normalized = normalizePayload(payload);

    if (!normalized.fullName || !normalized.email || !normalized.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await sendSmtpMail(getSmtpConfig(), normalized);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact email failed:', error);
    return NextResponse.json({ error: 'Unable to send message' }, { status: 500 });
  }
}
