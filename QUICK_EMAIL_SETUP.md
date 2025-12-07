# Quick Email Setup - 5 Minutes

Follow these simple steps to make your contact form send emails to `itsmeabdulrasheed@gmail.com`.

## Step 1: Install Dependencies (1 minute)

```bash
npm install
```

This will install the `resend` package needed for sending emails.

## Step 2: Get Resend API Key (3 minutes)

1. Go to [https://resend.com](https://resend.com) and sign up (free account)
2. After signing up, go to [API Keys](https://resend.com/api-keys)
3. Click "Create API Key"
4. Name it "O'der360 Website"
5. **Copy the API key** (it starts with `re_`)

## Step 3: Add API Key to Project (1 minute)

1. Create a file named `.env.local` in the root of your project
2. Add this line (replace with your actual API key):

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

**Example:**
```env
RESEND_API_KEY=re_abc123xyz789
```

## Step 4: Restart Your Server

Stop your dev server (Ctrl+C) and start it again:

```bash
npm run dev
```

## Step 5: Test It!

1. Go to your website's contact form
2. Fill it out and submit
3. Check `itsmeabdulrasheed@gmail.com` inbox
4. You should receive a beautifully formatted email! 📧

---

## That's It! 🎉

Your contact form is now working. Every time someone fills out the form, you'll receive an email at `itsmeabdulrasheed@gmail.com` with:
- Their name
- Their email (you can reply directly)
- Their phone number (if provided)
- Their message

---

## Troubleshooting

**"Email service is not configured" error?**
- Make sure `.env.local` file exists
- Make sure `RESEND_API_KEY` is set correctly
- Restart your dev server after creating `.env.local`

**Email not arriving?**
- Check your spam folder
- Check the Resend dashboard for email logs
- Verify your API key is correct

**Need more help?**
- See `EMAIL_SETUP_INSTRUCTIONS.md` for detailed instructions
- Check Resend documentation: https://resend.com/docs

---

## Free Tier Limits

Resend free tier includes:
- ✅ 3,000 emails per month
- ✅ 100 emails per day
- ✅ Perfect for most websites

If you need more, upgrade to a paid plan starting at $20/month.


