'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Hero() {
  const { t, lang } = useLanguage()

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

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  return (
    <section className="hero-luxury" id="home">
      {/* Subtle ambient lighting layers */}
      <div className="hero-ambient-glow" aria-hidden="true">
        <div className="glow-sphere glow-1"></div>
        <div className="glow-sphere glow-2"></div>
        <div className="hero-grid-pattern"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Editorial Value Proposition */}
          <div className="hero-editorial">
            {/* Status Pill */}
            <div className="hero-status-pill fade-in-up">
              <span className="pulse-indicator">
                <span className="pulse-ring"></span>
                <span className="pulse-dot"></span>
              </span>
              <span className="pill-text">
                {lang === 'ar' ? 'استشارات إدارة وتشغيل المطاعم • الإمارات' : 'PREMIER F&B OPERATIONS CONSULTANCY • UAE'}
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline fade-in-up delay-1">
              <span className="headline-block">{t.hero.titleLine1}</span>
              <span className="headline-block">{t.hero.titleLine2}</span>
              <span className="headline-block gradient-text">{t.hero.titleLine3}</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-lead fade-in-up delay-2">
              {t.hero.subtitle} <span className="hero-lead-italic">{t.hero.subtitleItalic}</span>
            </p>

            {/* Operational Framework Pills */}
            <div className="hero-framework fade-in-up delay-3">
              <div className="framework-step">
                <span className="step-dot"></span>
                <span>{t.hero.workflowStrategy}</span>
              </div>
              <span className="framework-arrow">→</span>
              <div className="framework-step">
                <span className="step-dot"></span>
                <span>{t.hero.workflowSystems}</span>
              </div>
              <span className="framework-arrow">→</span>
              <div className="framework-step">
                <span className="step-dot"></span>
                <span>{t.hero.workflowExecution}</span>
              </div>
            </div>

            <p className="hero-summary fade-in-up delay-4">
              {t.hero.description}
            </p>

            {/* CTA Group */}
            <div className="hero-cta-group fade-in-up delay-5">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  window.dispatchEvent(new Event('open-contact-modal'))
                }}
                className="btn-luxury-primary"
                id="hero-book-consultation"
              >
                <span>{t.hero.ctaStart}</span>
                <svg className="cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <Link href="#services" className="btn-luxury-secondary" id="hero-explore-services">
                {t.hero.ctaExplore}
              </Link>
            </div>

            {/* Key Metric Highlights */}
            <div className="hero-metrics-bar fade-in-up delay-6">
              <div className="metric-chip">
                <span className="metric-val">12<span className="metric-plus">+</span></span>
                <span className="metric-lbl">{t.hero.statYearsLabel}</span>
              </div>
              <div className="metric-sep"></div>
              <div className="metric-chip">
                <span className="metric-val">15<span className="metric-plus">+</span></span>
                <span className="metric-lbl">{t.hero.statProjectsLabel}</span>
              </div>
              <div className="metric-sep"></div>
              <div className="metric-chip">
                <span className="metric-val">21<span className="metric-plus">%</span></span>
                <span className="metric-lbl">{lang === 'ar' ? 'متوسط نمو الأرباح' : 'Avg. Margin Growth'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-layered Showcase Card */}
          <div className="hero-showcase fade-in-right delay-2">
            <div className="showcase-card-wrapper">
              <div className="showcase-main-card">
                <div className="showcase-media-frame">
                  <Image
                    src="/images/assets/Website/Hael/restaurant-2025-12-09-18.52.19-3.jpg"
                    alt="UAE Restaurant Operations Craft"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="showcase-img"
                  />
                  <div className="showcase-vignette"></div>
                </div>

                {/* Bottom Card Ribbon */}
                <div className="showcase-caption">
                  <div className="caption-badge">
                    <span className="badge-spark">✦</span>
                    <span>{t.hero.cardTag}</span>
                  </div>
                  <p className="caption-text">{t.hero.cardMsg}</p>
                </div>
              </div>

              {/* Floating Live Metric Card (Top Right) */}
              <div className="floating-metric-badge float-top-right">
                <div className="metric-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <div className="metric-text-box">
                  <span className="badge-num">+21% Margin</span>
                  <span className="badge-sub">{lang === 'ar' ? 'تحسين هوامش الربح' : 'Profit Optimization'}</span>
                </div>
              </div>

              {/* Floating Verified Badge (Bottom Left) */}
              <div className="floating-metric-badge float-bottom-left">
                <div className="metric-icon-box emerald">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="metric-text-box">
                  <span className="badge-num">{lang === 'ar' ? 'تنفيذ متكامل' : 'Turnkey Setup'}</span>
                  <span className="badge-sub">{lang === 'ar' ? 'من الفكرة إلى الافتتاح' : 'Concept to Operation'}</span>
                </div>
              </div>

              {/* Founder Signature Chip */}
              <div className="founder-signature-chip">
                <div className="founder-avatar-wrap">
                  <Image
                    src="/images/assets/brand/owner.png"
                    alt="Abdul Rasheed"
                    width={40}
                    height={40}
                    className="founder-mini-avatar"
                  />
                </div>
                <div className="founder-chip-info">
                  <span className="founder-name">Abdul Rasheed</span>
                  <span className="founder-title">{t.about.profileRole}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
