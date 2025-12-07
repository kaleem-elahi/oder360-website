import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import ImageGallery from '@/components/ImageGallery'
import About from '@/components/About'
import Expertise from '@/components/Expertise'
import Portfolio from '@/components/Portfolio'
import FeaturedWork from '@/components/FeaturedWork'
import Timeline from '@/components/Timeline'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Abdul Rasheed - From Concept to Establishment | F&B Operations Expert',
  description: '12 years of Restaurant Operations experience. Expert in menu creation, cost management, brand conceptualization, P&L analysis, and secret recipe development. Projects: Cafe Rashed Ali Pro, Capsica, Gemello, Desert Cafe Suwaiq.',
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Stats />
        <ImageGallery />
        <About />
        <Expertise />
        <Portfolio />
        <FeaturedWork />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

