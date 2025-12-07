# Quick Gmail Setup - 5 Minutes

Follow these simple steps to make your contact form send emails using Gmail.

## Step 1: Enable 2-Step Verification (2 minutes)

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click **2-Step Verification**
3. Follow the prompts to enable it (verify your phone)

## Step 2: Generate App Password (2 minutes)

1. Go back to [Google Account Security](https://myaccount.google.com/security)
2. Click **App passwords** (only shows if 2-Step is enabled)
3. Select **Mail** → **Other (Custom name)**
4. Type "O'der360 Website"
5. Click **Generate**
6. **Copy the 16-character password** (remove spaces when using it)

## Step 3: Install Dependencies (1 minute)

```bash
npm install
```

## Step 4: Create `.env.local` File

Create `.env.local` in your project root:

```env
GMAIL_USER=itsmeabdulrasheed@gmail.com
GMAIL_APP_PASSWORD=your_16_character_password_here
```

**Example:**

```env
GMAIL_USER=itsmeabdulrasheed@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

⚠️ **Important:**

- Use your **full Gmail address**
- Use the **App Password** (not your regular password)
- Remove spaces from the App Password

## Step 5: Restart Server

```bash
npm run dev
```

## Step 6: Test It! 🎉

1. Fill out the contact form
2. Submit it
3. Check `itsmeabdulrasheed@gmail.com`
4. You should receive an email!

---

## Troubleshooting

**"Invalid login" error?**

- Make sure you're using App Password (not regular password)
- Check 2-Step Verification is enabled
- Verify no spaces in App Password

**Can't find "App passwords"?**

- Enable 2-Step Verification first
- Wait a few minutes and refresh

**Email not arriving?**

- Check spam folder
- Verify credentials in `.env.local`
- Check server console for errors

---

## That's It! ✅

Your contact form now sends emails through Gmail!

For detailed instructions, see `GMAIL_SETUP.md`
