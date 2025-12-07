# Email Setup Instructions

This guide will help you set up the contact form to send emails to `itsmeabdulrasheed@gmail.com` when users submit the form.

## Option 1: Resend (Recommended - Easy & Free)

Resend is a modern email API service that's perfect for Next.js applications. They offer a free tier with 3,000 emails/month.

### Step 1: Sign Up for Resend

1. Go to [https://resend.com](https://resend.com)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Get Your API Key

1. Once logged in, go to [API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "O'der360 Website")
4. Copy the API key (starts with `re_`)

### Step 3: Add API Key to Your Project

1. Create a file named `.env.local` in the root of your project (if it doesn't exist)
2. Add your Resend API key:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

**Important:** The `.env.local` file is already in `.gitignore`, so it won't be committed to git.

### Step 4: Verify Your Domain (Optional but Recommended)

For production, you should verify your domain:

1. Go to [Domains](https://resend.com/domains) in Resend dashboard
2. Click "Add Domain"
3. Follow the instructions to add DNS records
4. Once verified, update the `from` email in `app/api/contact/route.ts`:
   ```typescript
   from: 'O\'der360 Contact <contact@yourdomain.com>',
   ```

For testing, you can use `onboarding@resend.dev` (already configured in the code).

### Step 5: Install Dependencies

The `resend` package is already added to `package.json`. Just run:

```bash
npm install
```

### Step 6: Test the Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to the contact form on your website
3. Fill out the form and submit it
4. Check your email inbox at `itsmeabdulrasheed@gmail.com`

---

## Option 2: EmailJS (Client-Side - No Backend Needed)

If you prefer a client-side solution that doesn't require a backend API route, you can use EmailJS.

### Step 1: Sign Up for EmailJS

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account (100 emails/month free)

### Step 2: Create an Email Service

1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account
5. Copy the Service ID

### Step 3: Create an Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Set up the template with variables:
   - `{{name}}` - User's name
   - `{{email}}` - User's email
   - `{{phone}}` - User's phone
   - `{{message}}` - User's message
4. Set "To Email" to: `itsmeabdulrasheed@gmail.com`
5. Copy the Template ID

### Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Copy your Public Key

### Step 5: Update Contact Component

Replace the Contact component with EmailJS integration:

```bash
npm install @emailjs/browser
```

Then update `components/Contact.tsx` to use EmailJS instead of the API route.

---

## Option 3: Nodemailer with Gmail SMTP

If you want to use Gmail directly, you can use Nodemailer.

### Step 1: Enable App Passwords in Gmail

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Go to "App Passwords"
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### Step 2: Install Nodemailer

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### Step 3: Update API Route

Update `app/api/contact/route.ts` to use Nodemailer instead of Resend.

---

## Current Setup

The project is currently configured to use **Resend** (Option 1). 

### What's Already Done:

✅ API route created at `app/api/contact/route.ts`  
✅ Resend package added to `package.json`  
✅ Contact form component ready  
✅ Email template with nice HTML formatting  
✅ Error handling and validation  

### What You Need to Do:

1. **Sign up for Resend** (5 minutes)
2. **Get your API key** (1 minute)
3. **Add it to `.env.local`** (1 minute)
4. **Run `npm install`** (1 minute)
5. **Test the form!**

---

## Troubleshooting

### Email Not Sending?

1. **Check your API key**: Make sure it's correct in `.env.local`
2. **Check the console**: Look for error messages in your terminal
3. **Verify Resend account**: Make sure your Resend account is active
4. **Check spam folder**: Sometimes emails go to spam initially

### "Email service is not configured" Error

- Make sure `.env.local` exists in the project root
- Make sure `RESEND_API_KEY` is set correctly
- Restart your development server after adding the env variable

### Rate Limits

- Resend free tier: 3,000 emails/month
- EmailJS free tier: 100 emails/month
- If you exceed limits, upgrade to a paid plan

---

## Security Notes

- ✅ `.env.local` is in `.gitignore` - your API key won't be committed
- ✅ Email validation is implemented
- ✅ Input sanitization is handled by Resend
- ⚠️ Consider adding rate limiting for production
- ⚠️ Consider adding reCAPTCHA to prevent spam (optional)

---

## Production Deployment

When deploying to Vercel, Netlify, or another platform:

1. Add `RESEND_API_KEY` to your platform's environment variables
2. Make sure to verify your domain with Resend
3. Update the `from` email address to use your verified domain

---

## Need Help?

If you encounter any issues:
1. Check the Resend dashboard for email logs
2. Check your server console for error messages
3. Verify your API key is correct
4. Make sure you've restarted your dev server after adding env variables


