'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [notification, setNotification] = useState<{ show: boolean; text: string }>({ show: false, text: '' })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    const handleContactSuccess = (e: Event) => {
      const detail = (e as CustomEvent)?.detail || {}
      const name = detail.name ? `, ${detail.name}` : ''
      setNotification({ show: true, text: `Message sent${name}. We will contact you shortly.` })
      setTimeout(() => setNotification({ show: false, text: '' }), 6000)
    }
    window.addEventListener('contact-success', handleContactSuccess as EventListener)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // cleanup listener on unmount
    return () => window.removeEventListener('contact-success', () => {})
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="logo-link">
          <Image
            src="/images/assets/brand/image.png"
            alt="Oder360 Logo"
            width={150}
            height={50}
            className="logo-image"
            priority
          />
        </Link>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link href="/" className="nav-link" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link" onClick={handleLinkClick}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/#portfolio" className="nav-link" onClick={handleLinkClick}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/#expertise" className="nav-link" onClick={handleLinkClick}>
              Expertise
            </Link>
          </li>
          <li>
            <Link href="/#about" className="nav-link" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <button
              className="nav-link nav-cta border-none cursor-pointer text-left"
              style={{ fontFamily: 'inherit', fontSize: '1rem', background: 'var(--primary-color)' }}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick();
                window.dispatchEvent(new Event('open-contact-modal'));
              }}
            >
              Contact
            </button>
          </li>
        </ul>
        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
      {notification.show && (
        <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1200 }}>
          <div style={{ background: '#10b981', color: 'white', padding: '12px 16px', borderRadius: 8, boxShadow: '0 6px 18px rgba(0,0,0,0.25)', minWidth: 260 }}>
            <strong>Success</strong>
            <div style={{ marginTop: 6 }}>{notification.text}</div>
          </div>
        </div>
      )}
  )
}


