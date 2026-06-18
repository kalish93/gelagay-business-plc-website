# Email setup for cPanel

The contact forms send messages through the cPanel mailbox `info@gelagay.com` using SMTP.

Add these environment variables in the cPanel Node.js app settings:

```env
SMTP_HOST=mail.gelagay.com
SMTP_PORT=465
SMTP_USER=info@gelagay.com
SMTP_PASS=the email account password
SMTP_FROM=info@gelagay.com
CONTACT_TO=info@gelagay.com
MAIL_DOMAIN=gelagay.com
```

Important:

- Do not commit the real email password to the repository.
- The website must run as a Node/Next.js app for `/api/contact` to work.
- If the site is exported as static HTML only, the email API route will not run.
- SMTP uses SSL/TLS on port `465`, matching the recommended cPanel settings.
- If messages go to Junk, check cPanel Email Deliverability and make sure SPF, DKIM, and DMARC are valid for `gelagay.com`.

## If messages land in Junk

The website can submit messages correctly and still land in Junk if the domain/mailbox is not trusted yet. In cPanel:

1. Open **Email Deliverability** for `gelagay.com`.
2. Confirm **SPF** is valid.
3. Confirm **DKIM** is valid.
4. Add a basic **DMARC** TXT record if one does not exist:

```txt
Name: _dmarc.gelagay.com
Value: v=DMARC1; p=none; rua=mailto:info@gelagay.com
```

5. In webmail, mark a test message as **Not Junk**.
6. Add `info@gelagay.com` to the address book or safe sender list.
7. Avoid testing with very short messages like `test`; use a normal business inquiry with a name, company, phone, and clear message.

The app sends mail using authenticated SMTP from `info@gelagay.com` and sets the visitor email as `Reply-To`, which is the correct pattern for deliverability.
