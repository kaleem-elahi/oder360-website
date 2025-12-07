import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Abdul Rasheed - From Concept to Establishment | F&B Operations Expert',
    template: '%s | Abdul Rasheed'
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
  creator: 'O\'der360',
  publisher: 'O\'der360',
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
    siteName: 'O\'der360',
    title: 'O\'der360 - F&B Operations Excellence for UAE Brand Managers',
    description: 'Leading F&B operations consultancy in UAE. Expert services for brand managers with proven track record of increasing profitability and operational efficiency.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'O\'der360 - F&B Operations Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O\'der360 - F&B Operations Excellence for UAE Brand Managers',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#007AFF" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Abu Dhabi" />
        <meta name="geo.position" content="24.4539;54.3773" />
        <meta name="ICBM" content="24.4539, 54.3773" />
      </head>
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'O\'der360',
              description: 'Leading F&B operations consultancy in UAE specializing in restaurant management, staff management, financial oversight, and franchise development.',
              url: 'https://oder360.ae',
              logo: 'https://oder360.ae/logo.png',
              image: 'https://oder360.ae/og-image.jpg',
              telephone: '+971547454416',
              email: 'itsmeabdulrasheed@gmail.com',
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

