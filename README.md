# O'der360 - Next.js SEO-Friendly Website

A modern, SEO-optimized Next.js website for O'der360, a leading F&B operations consultancy in the UAE. This website is specifically designed for UAE brand managers seeking operational excellence.

## Features

- **Next.js 14+** with App Router and TypeScript
- **SEO Optimized**: Comprehensive meta tags, structured data (JSON-LD), sitemap, and robots.txt
- **UAE-Focused**: Tailored content and SEO for the UAE market
- **Modern Design**: Clean, minimalist design with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance**: Optimized images, code splitting, and fast page loads
- **Accessibility**: Semantic HTML and ARIA labels

## SEO Features

- Comprehensive metadata (Open Graph, Twitter Cards)
- Structured data (JSON-LD) for better search engine understanding
- Automatic sitemap generation
- Robots.txt configuration
- Geo-targeting for UAE (Abu Dhabi)
- Optimized meta descriptions and keywords
- Canonical URLs

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
O-der360-website/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── robots.ts           # Robots.txt configuration
│   ├── sitemap.ts          # Sitemap generation
│   └── manifest.ts          # PWA manifest
├── components/
│   ├── Navigation.tsx      # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services section
│   ├── Stats.tsx           # Statistics section
│   ├── About.tsx           # About section
│   ├── Portfolio.tsx      # Portfolio section
│   ├── Timeline.tsx       # Timeline section
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer component
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## SEO Configuration

### Metadata

The site includes comprehensive SEO metadata in `app/layout.tsx`:
- Title and description optimized for UAE brand managers
- Open Graph tags for social media sharing
- Twitter Card metadata
- Geo-targeting for UAE (Abu Dhabi)
- Structured data (JSON-LD) for ProfessionalService schema

### Sitemap

Automatically generated at `/sitemap.xml` with all main sections.

### Robots.txt

Configured at `/robots.txt` to allow search engine crawling.

## Customization

### Update Site URL

Update the `metadataBase` in `app/layout.tsx` and URLs in `app/sitemap.ts`:

```typescript
metadataBase: new URL('https://yourdomain.com'),
```

### Update Content

- Services: Edit `components/Services.tsx`
- Portfolio: Edit `components/Portfolio.tsx`
- About: Edit `components/About.tsx`
- Contact: Edit `components/Contact.tsx`

### Update SEO Metadata

Edit `app/layout.tsx` to update:
- Title and description
- Keywords
- Open Graph images
- Structured data

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Node.js

## Performance Optimization

- Image optimization with Next.js Image component (when images are added)
- Code splitting and lazy loading
- CSS optimization
- Font optimization with next/font

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact Information

- **Phone**: +971 54 745 4416
- **Email**: itsmeabdulrasheed@gmail.com
- **Location**: Abu Dhabi, UAE
- **LinkedIn**: [Abdul Rasheed](https://www.linkedin.com/in/abdulrasheed547454416)

## License

© 2025 O'der360. All rights reserved.

## Images Setup

The website is designed to showcase beautiful kitchen and baking photos. Add your images to the following locations:

### Required Images

**Hero Section:**
- `/public/images/hero-kitchen.jpg` (1920x1080 recommended) - Main hero background

**Image Gallery:**
- `/public/images/kitchen-1.jpg` through `kitchen-3.jpg` - Kitchen operations photos
- `/public/images/baking-1.jpg` through `baking-3.jpg` - Baking and pastry photos
- `/public/images/operations-1.jpg`, `operations-2.jpg` - Operations photos

**Portfolio:**
- `/public/images/portfolio/steakhouse.jpg` - Mashakeek and Steak
- `/public/images/portfolio/pizza.jpg` - Pizzaty
- `/public/images/portfolio/coffee.jpg` - 20UR Coffee
- `/public/images/portfolio/cafe.jpg` - Hael Cafe
- `/public/images/portfolio/fast-casual.jpg` - Gemello & Capsica
- `/public/images/portfolio/burger.jpg` - Krush Burger

**Note:** The site includes beautiful gradient placeholders that will display until you add your images. All images are optimized with Next.js Image component for optimal performance.

## Next Steps

1. Add actual images to `/public/images` directory (see above)
2. Configure analytics (Google Analytics, etc.)
3. Set up form submission backend (e.g., Formspree, SendGrid)
4. Add more pages if needed (blog, case studies, etc.)
5. Configure domain and update URLs in metadata
