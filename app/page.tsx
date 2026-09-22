import Contact from '@/components/Contact'
import Expertise from '@/components/Expertise'
import FeaturedWork from '@/components/FeaturedWork'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ImageGallery from '@/components/ImageGallery'
import LogoTicker from '@/components/LogoTicker'
import Navigation from '@/components/Navigation'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Timeline from '@/components/Timeline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oder360 - From Concept to Establishment | F&B Operations Expert',
  description: '12 years of Restaurant Operations experience. Expert in menu creation, cost management, brand conceptualization, P&L analysis, and secret recipe development. Projects: Cafe Rashed Ali Pro, Capsica, Gemello, Desert Cafe Suwaiq.',
  openGraph: {
    title: 'Oder360 - F&B Operations Excellence for UAE Brand Managers',
    description: 'Leading F&B operations consultancy in UAE. Expert services for brand managers with proven track record of increasing profitability and operational efficiency.',
    url: 'https://oder360.com',
    siteName: 'Oder360',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oder360 - F&B Operations Excellence',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oder360 - F&B Operations Excellence for UAE Brand Managers',
    description: 'Leading F&B operations consultancy in UAE. Expert services for brand managers.',
    images: ['/og-image.jpg'],
  },
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="home-page">
        <Hero />
        <LogoTicker />
        <Services />
        <Stats />
        <ImageGallery />
        <Portfolio />
        <Expertise />
        {/* <FeaturedWork /> */}
        {/* <Timeline /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

