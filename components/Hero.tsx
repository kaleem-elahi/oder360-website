'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          const offsetTop = (element as HTMLElement).offsetTop - 80
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          })
        }
      }
    }

    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    // Parallax effect for hero background
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const heroVisual = document.querySelector('.hero-visual')
      if (heroVisual && scrolled < window.innerHeight) {
        ;(heroVisual as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`
        ;(heroVisual as HTMLElement).style.opacity = String(1 - scrolled / window.innerHeight)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-bg-image">
          <Image
            src="/images/hero-kitchen.jpg"
            alt="Professional kitchen operations"
            fill
            priority
            className="hero-image"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text fade-in-up">
          <h1 className="hero-title">
            <span className="title-line">From Concept</span>
            <span className="title-line">to Establishment</span>
            <span className="title-line highlight">12 Years of Excellence</span>
          </h1>
          <p className="hero-subtitle">
            Experienced Restaurant professional with 12 years of significant experience in Restaurant Operations. 
            Extensive knowledge in leading and managing operations, cost control, and bringing culinary concepts to life.
          </p>
          <div className="hero-buttons">
            <Link href="#contact" className="btn btn-primary">
              Get Started
            </Link>
            <Link href="#services" className="btn btn-secondary">
              Our Services
            </Link>
          </div>
        </div>
        <div className="hero-visual fade-in">
          <div className="floating-card card-1">
            <div className="card-icon">👨‍🍳</div>
            <div className="card-text">Kitchen Excellence</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🥖</div>
            <div className="card-text">Artisan Baking</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">📊</div>
            <div className="card-text">Operations</div>
          </div>
          <div className="floating-card card-4">
            <div className="card-icon">👥</div>
            <div className="card-text">Team Management</div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  )
}
