# cPanel deployment checklist

This project must be deployed as a Node.js/Next.js application because the contact form uses `/api/contact` to send email.

## Before uploading

- Do not upload `.env` unless you intentionally manage secrets through a server-only file.
- Do not upload `node_modules` or `.next`; install and build on the server when possible.
- Make sure cPanel is using Node.js `20.9+` or newer.

## Environment variables

Set these in the cPanel Node.js app environment:

```env
SMTP_HOST=mail.gelagay.com
SMTP_PORT=465
SMTP_USER=info@gelagay.com
SMTP_PASS=the email account password
SMTP_FROM=info@gelagay.com
CONTACT_TO=info@gelagay.com
MAIL_DOMAIN=gelagay.com
```

## Commands

Install dependencies:

```bash
npm install
```

Build:

```bash
npm run build
```

Start:

```bash
npm run start
```

If cPanel asks for a startup file, use:

```txt
server.js
```

If cPanel asks for a startup command, use:

```bash
npm run start
```

## Final checks

- Visit `https://gelagay.com`.
- Submit the contact form with a realistic message.
- Confirm the email arrives at `info@gelagay.com`.
- If it lands in Junk, follow `EMAIL_SETUP.md`.
