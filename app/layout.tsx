import MultiStepContactModal from '@/components/MultiStepContactModal'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Oder360 - From Concept to Establishment | F&B Operations Expert',
    template: '%s | Oder360'
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  description: '12 years of Restaurant Operations experience. Expert in menu creation, cost management, brand conceptualization, P&L analysis, and secret recipe development. Projects: Cafe Rashed Ali Pro, Capsica, Gemello, Desert Cafe Suwaiq.',
  keywords: [
    'F&B operations UAE',
    'restaurant management UAE',
    'brand management UAE',
    'food and beverage consultancy',
    'restaurant operations manager',
    'UAE restaurant consultant',
    'Abu Dhabi F&B services',
    'Dubai restaurant management',
    'franchise development UAE',
    'menu engineering UAE',
    'staff management UAE',
    'restaurant pre-opening UAE'
  ],
  authors: [{ name: 'Abdul Rasheed', url: 'https://www.linkedin.com/in/abdulrasheed547454416' }],
  creator: 'Oder360',
  publisher: 'Oder360',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://oder360.ae'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://oder360.ae',
    siteName: 'Oder360',
    title: 'Oder360 - F&B Operations Excellence for UAE Brand Managers',
    description: 'Leading F&B operations consultancy in UAE. Expert services for brand managers with proven track record of increasing profitability and operational efficiency.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oder360 - F&B Operations Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oder360 - F&B Operations Excellence for UAE Brand Managers',
    description: 'Leading F&B operations consultancy in UAE. Expert services for brand managers.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AE">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#007AFF" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Abu Dhabi" />
        <meta name="geo.position" content="24.4539;54.3773" />
        <meta name="ICBM" content="24.4539, 54.3773" />
      </head>
      <body className={inter.className}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18169896326"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18169896326');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1702864807583217');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1702864807583217&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}
        <MultiStepContactModal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Oder360',
              description: 'Leading F&B operations consultancy in UAE specializing in restaurant management, staff management, financial oversight, and franchise development.',
              url: 'https://oder360.ae',
              logo: 'https://oder360.ae/logo.png',
              image: 'https://oder360.ae/og-image.jpg',
              telephone: '+971547454416',
              email: 'contact@oder360.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Abu Dhabi',
                addressLocality: 'Abu Dhabi',
                addressRegion: 'Abu Dhabi',
                addressCountry: 'AE',
              },
              areaServed: {
                '@type': 'Country',
                name: 'United Arab Emirates',
              },
              founder: {
                '@type': 'Person',
                name: 'Abdul Rasheed',
                jobTitle: 'Founder & CEO',
                url: 'https://www.linkedin.com/in/abdulrasheed547454416',
              },
              sameAs: [
                'https://www.linkedin.com/in/abdulrasheed547454416',
              ],
              serviceType: [
                'F&B Operations Management',
                'Restaurant Staff Management',
                'Financial Management',
                'Menu Engineering',
                'Pre-Opening Operations',
                'Franchise Development',
                'Business Optimization',
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}

