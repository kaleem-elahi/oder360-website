import About from '@/components/About'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About | Oder360',
    description: 'Learn more about Oder360, our vision, operations expertise, and our founder Abdul Rasheed.',
}

export default function AboutPage() {
    return (
        <>
            <Navigation />
            <main className="about-page" style={{ paddingTop: '8rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <About />
            </main>
            <Footer />
        </>
    )
}
