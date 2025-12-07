# Gmail SMTP Setup with Nodemailer

This guide will help you set up the contact form to send emails using your Gmail account.

## Step 1: Enable 2-Step Verification

1. Go to your [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **2-Step Verification**
3. Follow the prompts to enable 2-Step Verification (if not already enabled)
   - You'll need to verify your phone number
   - Google will send you a verification code

## Step 2: Generate App Password

1. Go back to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **App passwords**
   - If you don't see this option, make sure 2-Step Verification is enabled first
3. Select **Mail** as the app
4. Select **Other (Custom name)** as the device
5. Type "O'der360 Website" as the name
6. Click **Generate**
7. **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)
   - ⚠️ **Important:** You can only see this password once! Copy it immediately.
   - Remove the spaces when using it (e.g., `abcdefghijklmnop`)

## Step 3: Install Dependencies

```bash
npm install
```

This will install the `nodemailer` package.

## Step 4: Create Environment File

1. Create a file named `.env.local` in the root of your project
2. Add your Gmail credentials:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
```

**Example:**
```env
GMAIL_USER=itsmeabdulrasheed@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

**Important Notes:**
- Use your **full Gmail address** for `GMAIL_USER`
- Use the **16-character App Password** (without spaces) for `GMAIL_APP_PASSWORD`
- **Never use your regular Gmail password** - it won't work and it's not secure

## Step 5: Restart Your Server

Stop your dev server (Ctrl+C) and start it again:

```bash
npm run dev
```

## Step 6: Test the Form

1. Go to your website's contact form
2. Fill it out and submit
3. Check `itsmeabdulrasheed@gmail.com` inbox
4. You should receive a beautifully formatted email! 📧

---

## Troubleshooting

### "Invalid login" Error

**Problem:** Authentication failed

**Solutions:**
1. Make sure you're using the **App Password**, not your regular Gmail password
2. Verify 2-Step Verification is enabled
3. Check that the App Password was copied correctly (no spaces)
4. Make sure the email address in `.env.local` matches the account where you generated the App Password

### "ECONNECTION" Error

**Problem:** Can't connect to Gmail servers

**Solutions:**
1. Check your internet connection
2. Verify Gmail SMTP servers are accessible
3. Try again after a few minutes (might be temporary)

### Email Not Arriving

**Solutions:**
1. Check your spam/junk folder
2. Verify the recipient email is correct in the code
3. Check the server console for error messages
4. Verify your Gmail account is active and not restricted

### App Passwords Option Not Showing

**Problem:** Can't find "App passwords" in Google Account settings

**Solutions:**
1. Make sure 2-Step Verification is **enabled first**
2. Wait a few minutes after enabling 2-Step Verification
3. Try refreshing the page
4. Make sure you're signed in to the correct Google account

---

## Security Best Practices

✅ **DO:**
- Use App Passwords (not your regular password)
- Keep `.env.local` in `.gitignore` (already done)
- Use environment variables for all sensitive data
- Regularly rotate your App Passwords

❌ **DON'T:**
- Commit `.env.local` to git
- Share your App Password
- Use your regular Gmail password
- Hardcode credentials in your code

---

## Production Deployment

When deploying to Vercel, Netlify, or another platform:

1. Add environment variables in your platform's dashboard:
   - `GMAIL_USER=your-email@gmail.com`
   - `GMAIL_APP_PASSWORD=your_app_password`

2. Make sure to use the same Gmail account or update the code if using a different one

3. Restart your application after adding environment variables

---

## Alternative: Use a Different Gmail Account

If you want to use a different Gmail account (not `itsmeabdulrasheed@gmail.com`):

1. Generate an App Password for that account
2. Update `.env.local` with that account's credentials
3. The emails will still be sent **to** `itsmeabdulrasheed@gmail.com` (as configured in the code)
4. The emails will be sent **from** the account you configure in `.env.local`

---

## Email Features

When someone submits the form, you'll receive:
- ✅ Beautifully formatted HTML email
- ✅ All form fields (name, email, phone, message)
- ✅ Reply-to set to sender's email (you can reply directly)
- ✅ Timestamp in UAE timezone
- ✅ Plain text version for compatibility

---

## Gmail Limits

Gmail free accounts have these limits:
- **500 emails per day** (sending)
- **2,000 emails per day** (receiving)

For most websites, this is more than enough. If you need more, consider:
- Using a business Gmail account (Google Workspace)
- Using a dedicated email service (Resend, SendGrid, etc.)

---

## Need Help?

If you encounter issues:
1. Check the server console for detailed error messages
2. Verify your App Password is correct
3. Make sure 2-Step Verification is enabled
4. Try generating a new App Password

---

## Quick Checklist

- [ ] 2-Step Verification enabled on Gmail
- [ ] App Password generated
- [ ] `.env.local` file created
- [ ] Gmail credentials added to `.env.local`
- [ ] Dependencies installed (`npm install`)
- [ ] Server restarted
- [ ] Form tested successfully

Once all items are checked, your contact form is ready to send emails! 🎉


