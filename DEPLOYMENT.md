# Deployment Guide

Your Next.js website is ready to deploy! Here are the best options:

## Option 1: Vercel (Recommended) ⭐

Vercel is made by the creators of Next.js and offers the best integration.

### Quick Deploy (5 minutes)

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/oder360-website.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Add Environment Variables**:
   - In your Vercel project dashboard
   - Go to Settings → Environment Variables
   - Add:
     ```
     GMAIL_USER=itsmeabdulrasheed@gmail.com
     GMAIL_APP_PASSWORD=your_app_password_here
     ```
   - Redeploy after adding variables

4. **Done!** Your site will be live at `your-project.vercel.app`

### Custom Domain (Optional)

1. In Vercel dashboard → Settings → Domains
2. Add your domain (e.g., `oder360.ae`)
3. Follow DNS instructions
4. Update `metadataBase` in `app/layout.tsx` with your domain

---

## Option 2: Netlify

### Deploy Steps

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Add Environment Variables**:
   - Site settings → Environment variables
   - Add `GMAIL_USER` and `GMAIL_APP_PASSWORD`
   - Redeploy

---

## Option 3: Self-Hosted (VPS/Server)

### Requirements
- Node.js 18+ installed
- PM2 (process manager) recommended

### Steps

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

3. **Or use PM2** (recommended):
   ```bash
   npm install -g pm2
   pm2 start npm --name "oder360" -- start
   pm2 save
   pm2 startup
   ```

4. **Set up reverse proxy** (Nginx):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Add SSL** (Let's Encrypt):
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Pre-Deployment Checklist

Before deploying, make sure:

- [ ] Build succeeds (`npm run build`)
- [ ] Environment variables are ready
- [ ] Gmail App Password is generated
- [ ] Domain is ready (if using custom domain)
- [ ] All images are in `/public/images/` (or placeholders are working)
- [ ] Test contact form locally

---

## Environment Variables for Production

You'll need to add these in your hosting platform:

```env
GMAIL_USER=itsmeabdulrasheed@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

**Important:** Never commit these to git! They should only be in your hosting platform's environment variables.

---

## Post-Deployment Steps

1. **Update Site URL**:
   - Edit `app/layout.tsx`
   - Change `metadataBase` to your actual domain
   - Update `app/sitemap.ts` with your domain

2. **Test Everything**:
   - Visit your live site
   - Test contact form
   - Check all pages load correctly
   - Verify images display

3. **Submit to Search Engines**:
   - Google Search Console
   - Bing Webmaster Tools
   - Submit your sitemap: `https://yourdomain.com/sitemap.xml`

4. **Monitor**:
   - Check Vercel/Netlify dashboard for errors
   - Monitor email delivery
   - Check analytics (if added)

---

## Troubleshooting

### Build Fails

- Check Node.js version (need 18+)
- Run `npm install` again
- Check for TypeScript errors

### Contact Form Not Working

- Verify environment variables are set
- Check server logs for errors
- Test Gmail credentials locally first

### Images Not Loading

- Make sure images are in `/public/images/`
- Check image paths in components
- Verify Next.js Image component is working

---

## Recommended: Vercel

**Why Vercel?**
- ✅ Made by Next.js creators
- ✅ Zero configuration needed
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Free tier is generous
- ✅ Easy custom domains
- ✅ Automatic deployments from Git

**Free Tier Includes:**
- 100GB bandwidth/month
- Unlimited requests
- Automatic SSL
- Preview deployments

---

## Quick Start Command

If you have Vercel CLI installed:

```bash
npm i -g vercel
vercel
```

Follow the prompts and your site will be deployed!

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Next.js Deployment: https://nextjs.org/docs/deployment
