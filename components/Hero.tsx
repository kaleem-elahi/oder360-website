'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

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
        ; (heroVisual as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`
          ; (heroVisual as HTMLElement).style.opacity = String(1 - scrolled / window.innerHeight)
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
            src="/images/assets/Website/Capsica/pizza.jpg"
            alt="Artisan pizza"
            fill
            priority
            className="hero-image"
            sizes="100vw"
          />
        </div>
        <div className="hero-overlay-luxury"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text-container">

          <h1 className="hero-title-modern">
            <span className="text-reveal">{t.hero.titleLine1}</span>
            <span className="text-reveal delay-1">{t.hero.titleLine2}</span>
            <span className="text-reveal highlight-gradient delay-2">{t.hero.titleLine3}</span>
          </h1>

          <p className="hero-subtitle-modern fade-in-up delay-3">
            {t.hero.subtitle}
            <span className="text-italic">{t.hero.subtitleItalic}</span>
          </p>

          <div className="hero-workflow hero-badge-modern fade-in-up delay-4">
            <span className="workflow-item">{t.hero.workflowStrategy}</span>
            <span className="workflow-arrow">→</span>
            <span className="workflow-item">{t.hero.workflowSystems}</span>
            <span className="workflow-arrow">→</span>
            <span className="workflow-item">{t.hero.workflowExecution}</span>
          </div>

          <p className="hero-description-modern fade-in-up delay-5">
            {t.hero.description}
          </p>

          <div className="hero-actions fade-in-up delay-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event('open-contact-modal'));
              }}
              className="btn btn-primary border-none cursor-pointer text-left"
              style={{ fontFamily: 'inherit' }}
            >
              {t.hero.ctaStart}
              <span className="btn-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <Link href="#services" className="btn-modern btn-outline-modern">
              {t.hero.ctaExplore}
            </Link>
          </div>

          <div className="hero-stats-modern fade-in-up delay-7">
            <div className="stat-glass-item">
              <span className="stat-number">12+</span>
              <span className="stat-label">{t.hero.statYearsLabel}</span>
            </div>
            <div className="divider-line"></div>
            <div className="stat-glass-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">{t.hero.statProjectsLabel}</span>
            </div>
            <div className="divider-line"></div>
            <div className="stat-glass-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">{t.hero.statSuccessLabel}</span>
            </div>
          </div>
        </div>

        <div className="hero-visual-modern">
          <div className="image-showcase-container">
            <div className="main-visual-card">
              <Image
                src="/images/assets/Website/Hael/restaurant-2025-12-09-18.52.19-3.jpg"
                alt="Restaurant Interior"
                fill
                className="visual-image-main"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="glass-overlay-card">
                <div className="card-info">
                  <span className="card-tag">{t.hero.cardTag}</span>
                  <p className="card-msg">{t.hero.cardMsg}</p>
                </div>
              </div>
            </div>

            <div className="floating-elements">
              <div className="floating-img item-1">
                <Image src="/images/assets/Website/Capsica/pizza.jpg" alt="Pizza" fill className="visual-image" />
              </div>
              <div className="floating-img item-2">
                <Image src="/images/assets/Website/Karakccino/cafe-0012.jpg" alt="Coffee" fill className="visual-image" />
              </div>
              <div className="floating-img item-3">
                <Image src="/images/assets/Website/Capsica/risotto-salmon.jpg" alt="Salmon" fill className="visual-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

  )
}
