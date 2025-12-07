# Email Setup Guide

This guide explains how to set up the contact form to send emails to `itsmeabdulrasheed@gmail.com`.

## Option 1: Using Resend (Recommended - Easy Setup)

Resend is a modern email API that's easy to set up and has a generous free tier.

### Steps:

1. **Sign up for Resend**
   - Go to https://resend.com
   - Sign up for a free account
   - Verify your email

2. **Get API Key**
   - Go to API Keys section
   - Create a new API key
   - Copy the key

3. **Add Environment Variable**
   - Create `.env.local` file in the root directory
   - Add: `RESEND_API_KEY=your_api_key_here`

4. **Install Resend**
   ```bash
   npm install resend
   ```

5. **Update API Route**
   - Uncomment the Resend code in `app/api/contact/route.ts`
   - Update the `from` email address (must be a verified domain or use Resend's test domain)

### Example Resend Integration:

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'onboarding@resend.dev', // Use Resend's test domain or your verified domain
  to: 'itsmeabdulrasheed@gmail.com',
  subject: subject,
  text: emailBody,
  html: `<pre>${emailBody}</pre>`, // Optional: HTML version
})
```

---

## Option 2: Using EmailJS (No Backend Required)

EmailJS allows you to send emails directly from the frontend without a backend.

### Steps:

1. **Sign up for EmailJS**
   - Go to https://www.emailjs.com
   - Sign up for a free account

2. **Create Email Service**
   - Go to Email Services
   - Add a new service (Gmail, Outlook, etc.)
   - Connect your email account

3. **Create Email Template**
   - Go to Email Templates
   - Create a new template
   - Use variables: `{{name}}`, `{{email}}`, `{{phone}}`, `{{message}}`

4. **Get Public Key and Service ID**
   - Go to Account > General
   - Copy your Public Key
   - Copy your Service ID and Template ID

5. **Update Contact Component**
   - Install: `npm install @emailjs/browser`
   - Update `components/Contact.tsx` with EmailJS code (see below)

### EmailJS Integration Code:

```typescript
import emailjs from '@emailjs/browser'

// In handleSubmit:
const serviceId = 'your_service_id'
const templateId = 'your_template_id'
const publicKey = 'your_public_key'

await emailjs.send(
  serviceId,
  templateId,
  {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
    to_email: 'itsmeabdulrasheed@gmail.com',
  },
  publicKey
)
```

---

## Option 3: Using Nodemailer (Full Control)

Nodemailer gives you full control over email sending.

### Steps:

1. **Install Nodemailer**
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

2. **Set up Gmail SMTP** (or your email provider)
   - For Gmail, you'll need an App Password
   - Go to Google Account > Security > 2-Step Verification > App Passwords
   - Generate an app password

3. **Add Environment Variables**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=itsmeabdulrasheed@gmail.com
   SMTP_PASS=your_app_password
   ```

4. **Update API Route** with Nodemailer code:

```typescript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: 'itsmeabdulrasheed@gmail.com',
  subject: subject,
  text: emailBody,
  html: `<pre>${emailBody}</pre>`,
})
```

---

## Option 4: Using Formspree (Easiest - No Code Changes)

Formspree is the simplest option - just change the form action.

### Steps:

1. **Sign up for Formspree**
   - Go to https://formspree.io
   - Sign up for free account

2. **Create a Form**
   - Create a new form
   - Set recipient email: `itsmeabdulrasheed@gmail.com`
   - Copy the form endpoint URL

3. **Update Contact Component**
   - Change form action to Formspree URL
   - Remove the API route call

### Formspree Integration:

```tsx
<form 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
  className="form"
>
  {/* form fields */}
</form>
```

---

## Quick Start (Recommended: Resend)

1. Install Resend:
   ```bash
   npm install resend
   ```

2. Create `.env.local`:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```

3. Update `app/api/contact/route.ts` with the Resend code from Option 1

4. Test the form!

---

## Testing

After setup, test the contact form:
1. Fill out all fields
2. Click "Send Message"
3. Check your email inbox at `itsmeabdulrasheed@gmail.com`

---

## Security Notes

- Never commit `.env.local` to git (it's already in `.gitignore`)
- Use environment variables for all sensitive data
- Consider adding rate limiting for production
- Add reCAPTCHA to prevent spam (optional)

---

## Current Status

The form is currently set up to use the Next.js API route (`/api/contact`). You need to:
1. Choose one of the email service options above
2. Install the required package
3. Update the API route with the email sending code
4. Add environment variables

The form will work once you complete the email service setup!

