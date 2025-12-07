# Pre-Deployment Checklist

Use this checklist before deploying your website to ensure everything is ready.

## Code & Git

- [ ] All code changes are committed
- [ ] Code is pushed to GitHub/GitLab
- [ ] No console errors in development
- [ ] No TypeScript errors (`npm run build` succeeds)
- [ ] All dependencies are in `package.json`

## Environment Variables

- [ ] Gmail credentials ready:
  - [ ] `GMAIL_USER=itsmeabdulrasheed@gmail.com`
  - [ ] `GMAIL_APP_PASSWORD=your_app_password`
- [ ] Know where to add these in your hosting platform

## Functionality Testing

- [ ] Contact form works locally
- [ ] Email sending works (test with real submission)
- [ ] All navigation links work
- [ ] All sections display correctly
- [ ] Mobile responsive design works
- [ ] Images load (or placeholders display)

## SEO & Metadata

- [ ] Update `metadataBase` in `app/layout.tsx` with your domain
- [ ] Update `app/sitemap.ts` with your domain
- [ ] Update `app/robots.ts` with your domain
- [ ] All meta descriptions are accurate
- [ ] Keywords are relevant

## Content

- [ ] All text content is accurate
- [ ] Contact information is correct
- [ ] Portfolio projects are listed correctly
- [ ] No placeholder text left in

## Images (Optional but Recommended)

- [ ] Hero background image added or placeholder works
- [ ] Portfolio images added or placeholders work
- [ ] Gallery images added or placeholders work
- [ ] Featured work images added or placeholders work

## Build Test

Run these commands to ensure everything builds:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# If build succeeds, you're ready!
```

## Deployment Platform Setup

- [ ] Account created on hosting platform (Vercel/Netlify)
- [ ] GitHub repository is connected
- [ ] Environment variables are ready to add
- [ ] Domain is ready (if using custom domain)

## Post-Deployment Tasks

After deployment, remember to:

- [ ] Test contact form on live site
- [ ] Verify email delivery
- [ ] Test all links and navigation
- [ ] Submit sitemap to Google Search Console
- [ ] Check mobile responsiveness on live site
- [ ] Monitor error logs for first few days

---

## Quick Build Test

Run this to verify everything is ready:

```bash
npm install
npm run build
```

If this succeeds without errors, you're ready to deploy! ✅

---

## Need Help?

- See `QUICK_DEPLOY.md` for 5-minute deployment guide
- See `DEPLOYMENT.md` for detailed instructions
- Check hosting platform documentation

Good luck with your deployment! 🚀

