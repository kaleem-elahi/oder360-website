'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="logo-text">
          O'der<span className="logo-accent">360</span>
        </Link>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link href="#home" className="nav-link" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#services" className="nav-link" onClick={handleLinkClick}>
              Services
            </Link>
          </li>
          <li>
            <Link href="#about" className="nav-link" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="nav-link" onClick={handleLinkClick}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#contact" className="nav-link" onClick={handleLinkClick}>
              Contact
            </Link>
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
  )
}


