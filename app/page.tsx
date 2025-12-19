import About from '@/components/About'
import Contact from '@/components/Contact'
import Expertise from '@/components/Expertise'
import FeaturedWork from '@/components/FeaturedWork'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ImageGallery from '@/components/ImageGallery'
import Navigation from '@/components/Navigation'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Timeline from '@/components/Timeline'

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
        {/* <Timeline /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

