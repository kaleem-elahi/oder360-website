# Quick Deployment Guide

Your website is ready to deploy! ✅ Build successful.

## Fastest Way: Vercel (Recommended)

### Method 1: Via Web Interface (Easiest)

1. **Push to GitHub** (if not already):

   ```bash
   git init
   git add .
   git commit -m "Ready for deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/oder360-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:

   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" → Use GitHub
   - Click "Add New Project"
   - Import your repository
   - Click "Deploy" (settings auto-detected)

3. **Add Environment Variables**:

   - Project Settings → Environment Variables
   - Add:
     - `GMAIL_USER` = `itsmeabdulrasheed@gmail.com`
     - `GMAIL_APP_PASSWORD` = `your_app_password`
   - Click "Redeploy"

4. **Done!** Your site is live at `your-project.vercel.app`

### Method 2: Via CLI (If you prefer command line)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name? oder360-website
# - Directory? ./
# - Override settings? N

# For production deployment:
vercel --prod
```

---

## Alternative: Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**:

   - Go to [netlify.com](https://netlify.com)
   - "Add new site" → "Import an existing project"
   - Connect GitHub → Select repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

3. **Add Environment Variables**:
   - Site settings → Environment variables
   - Add `GMAIL_USER` and `GMAIL_APP_PASSWORD`
   - Trigger redeploy

---

## Important: Environment Variables

**You MUST add these in your hosting platform:**

```
GMAIL_USER=itsmeabdulrasheed@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
```

Without these, the contact form won't work!

---

## After Deployment

1. **Test your site**:

   - Visit the live URL
   - Test the contact form
   - Check all pages

2. **Update domain** (if using custom domain):

   - Edit `app/layout.tsx` → Change `metadataBase`
   - Edit `app/sitemap.ts` → Update URLs

3. **Submit to Google**:
   - Google Search Console
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

---

## Quick Checklist

- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel/Netlify
- [ ] Environment variables added
- [ ] Site is live and working
- [ ] Contact form tested
- [ ] Custom domain configured (optional)

---

## Need Help?

See `DEPLOYMENT.md` for detailed instructions.
