'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

const serviceIcons = [
  // 1. Staff Management
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  // 2. Financial Management
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  ),
  // 3. Menu Engineering
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="9" y1="3" x2="9" y2="21"></line>
      <line x1="3" y1="9" x2="21" y2="9"></line>
    </svg>
  ),
  // 4. Pre-Opening Operations
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  ),
  // 5. Franchise Development
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ),
  // 6. Business Optimization
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  ),
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t, lang } = useLanguage()
  const services = t.services.items

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const cards = sectionRef.current?.querySelectorAll('.service-bento-card')
    cards?.forEach((card) => observer.observe(card))

    return () => {
      cards?.forEach((card) => observer.unobserve(card))
    }
  }, [])

  const handleOpenConsultation = (e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new Event('open-contact-modal'))
  }

  return (
    <section className="services-section" id="services" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="services-header fade-in-up">
          <div className="section-eyebrow">
            <span className="eyebrow-spark">✦</span>
            <span>{lang === 'ar' ? 'خدمات استشارية وتشغيلية متكاملة' : 'COMPREHENSIVE F&B CAPABILITIES'}</span>
          </div>
          <h2 className="services-title">{t.services.sectionTitle}</h2>
          <p className="services-lead">{t.services.sectionSubtitle}</p>
        </div>

        {/* Bento Grid */}
        <div className="services-bento-grid">
          {services.map((service, index) => {
            const num = (index + 1).toString().padStart(2, '0')
            const isFeatured = index === 0 || index === 3

            return (
              <div
                key={index}
                className={`service-bento-card ${isFeatured ? 'card-featured' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Subtle Card Glow */}
                <div className="card-ambient-glow" aria-hidden="true"></div>

                <div className="card-top-bar">
                  <div className="service-icon-box">
                    {serviceIcons[index]}
                  </div>
                  <span className="service-index">{num}</span>
                </div>

                <div className="service-content">
                  <h3 className="service-bento-title">{service.title}</h3>
                  <p className="service-bento-desc">{service.description}</p>
                </div>

                <div className="service-features-list">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="feature-pill">
                      <svg className="feature-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="card-footer-action">
                  <button
                    onClick={handleOpenConsultation}
                    className="service-inquire-btn"
                  >
                    <span>{lang === 'ar' ? 'طلب استشارة بهذا المجال' : 'Consult on this service'}</span>
                    <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Turnkey Banner Strip */}
        <div className="turnkey-banner fade-in-up">
          <div className="banner-content">
            <div className="banner-badge">
              <span className="sparkle">★</span>
              <span>{lang === 'ar' ? 'حلول تشغيل شاملة' : 'TURNKEY RESTAURANT SOLUTIONS'}</span>
            </div>
            <h3 className="banner-heading">
              {lang === 'ar'
                ? 'هل تخطط لإطلاق مطعم جديد أو رفع كفاءة فرع قائم في الإمارات؟'
                : 'Planning a new launch or seeking turnaround operational efficiency in the UAE?'}
            </h3>
            <p className="banner-sub">
              {lang === 'ar'
                ? 'نقدّم لك منهجية تشغيل واضحة تضمن ضبط التكاليف وزيادة هوامش الربح من اليوم الأول.'
                : 'Get direct strategic guidance, kitchen design, SOPs, and financial budgeting tailored to GCC market realities.'}
            </p>
          </div>
          <div className="banner-actions">
            <button
              onClick={handleOpenConsultation}
              className="btn-luxury-primary"
              id="services-turnkey-cta"
            >
              <span>{lang === 'ar' ? 'احجز جلسة استشارية أولى' : 'Book Strategic Scope Review'}</span>
              <svg className="cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
