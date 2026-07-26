'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link href="/" className="footer-logo-link">
              <Image
                src="/images/assets/brand/logo.png"
                alt="Oder360 Logo"
                width={180}
                height={60}
                className="footer-logo-image"
              />
            </Link>
            <p>{f.tagline}</p>
          </div>
          <div className="footer-column">
            <h4>{f.servicesHeading}</h4>
            <ul>
              <li><Link href="#services">{f.link_staffMgmt}</Link></li>
              <li><Link href="#services">{f.link_financialMgmt}</Link></li>
              <li><Link href="#services">{f.link_menuEng}</Link></li>
              <li><Link href="#services">{f.link_preOpening}</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>{f.companyHeading}</h4>
            <ul>
              <li><Link href="#about">{f.link_about}</Link></li>
              <li><Link href="#portfolio">{f.link_portfolio}</Link></li>
              <li><Link href="#contact">{f.link_contact}</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{f.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
