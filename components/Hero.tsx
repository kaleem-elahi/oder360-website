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
            src="/images/assets/Website/Pizzaty/IMG_7715.jpg"
            alt="Modern restaurant operations"
            fill
            priority
            className="hero-image"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-gradient"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text fade-in-up">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Restaurant Operations Platform
          </div>
          <h1 className="hero-title">
            <span className="title-line">Transform Your</span>
            <span className="title-line">Restaurant Operations</span>
            <span className="title-line highlight">Into Success</span>
          </h1>
          <p className="hero-subtitle">
            From concept to establishment. We provide end-to-end restaurant operations solutions 
            that scale your business, optimize costs, and maximize profitability.
          </p>
          <div className="hero-buttons">
            <Link href="#contact" className="btn btn-primary">
              Start Your Journey
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="#services" className="btn btn-secondary">
              Explore Services
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="stat-value">12+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="hero-stat">
              <div className="stat-value">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="hero-stat">
              <div className="stat-value">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
        <div className="hero-visual fade-in">
          <div className="hero-image-grid">
            <div className="hero-image-item item-1">
              <Image
                src="/images/assets/Website/Capsica/PIZZA.jpg"
                alt="Pizza"
                fill
                className="hero-grid-image"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="hero-image-item item-2">
              <Image
                src="/images/assets/Website/20UR Coffee/DSC00517 copy.jpg"
                alt="Coffee"
                fill
                className="hero-grid-image"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="hero-image-item item-3">
              <Image
                src="/images/assets/Website/Pizzaty/IMG_0891.jpg"
                alt="Restaurant"
                fill
                className="hero-grid-image"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="hero-image-item item-4">
              <Image
                src="/images/assets/Website/Capsica/RISOTTO SALMON.jpg"
                alt="Food"
                fill
                className="hero-grid-image"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  )
}
