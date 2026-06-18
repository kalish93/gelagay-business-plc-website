export type ContactFormPayload = {
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  solutionArea?: string;
  message: string;
  source: string;
  website?: string;
};

export async function submitContactForm(payload: ContactFormPayload) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Unable to send message');
  }
}

