import PrivacyPolicy from '@/components/PrivacyPolicy'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | ŌDER360',
  description: 'Explains how ŌDER360 collects, uses, discloses, transfers, stores and protects Personal Data under UAE PDPL, GDPR and CCPA.',
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="privacy-policy-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  )
}
