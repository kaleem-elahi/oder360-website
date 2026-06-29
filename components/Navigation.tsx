'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [notification, setNotification] = useState<{ show: boolean; text: string }>({ show: false, text: '' })
  const [isDark, setIsDark] = useState(true)

  // Apply theme on mount (reads from localStorage to avoid flicker)
  useEffect(() => {
    const saved = localStorage.getItem('oder360-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const useDark = saved ? saved === 'dark' : prefersDark

    setIsDark(useDark)
    document.documentElement.setAttribute('data-theme', useDark ? 'dark' : 'light')
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    const theme = next ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('oder360-theme', theme)
  }

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
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('contact-success', handleContactSuccess as EventListener)
    }
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
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
              <Link href="/about" className="nav-link" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <button
                className="nav-link nav-cta text-left cursor-pointer"
                data-tooltip="Let's connect to setup your business model"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick();
                  window.dispatchEvent(new Event('open-contact-modal'));
                }}
              >
                Let&apos;s Connect 🧑‍🍳
              </button>
            </li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Theme toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                /* Sun icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                /* Moon icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

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
    </>
  )
}
