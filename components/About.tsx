'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

export default function About() {
  const { t, lang } = useLanguage()
  const a = t.about

  const handleOpenConsultation = (e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new Event('open-contact-modal'))
  }

  return (
    <section className="about-luxury-section" id="about">
      <div className="container">
        <div className="about-luxury-grid">
          {/* Left Column: Founder Story & Impact Highlights */}
          <div className="about-story-col fade-in-left">
            <div className="section-eyebrow">
              <span className="eyebrow-spark">✦</span>
              <span>{lang === 'ar' ? 'الخبرة والقيادة التشغيلية' : 'STRATEGIC FOUNDER & LEADERSHIP'}</span>
            </div>

            <h2 className="about-luxury-title">{a.sectionTitle}</h2>

            <div className="about-quote-box">
              <p className="about-quote-text">
                {lang === 'ar'
                  ? '«أكثر من 12 عاماً من القيادة التشغيلية الدقيقة في مطاعم الإمارات وعُمان — نترجم الشغف بالطهي إلى أنظمة تشغيل مربحة ومستدامة.»'
                  : '"Over 12 years of hands-on restaurant operations across UAE and Oman — transforming culinary passion into rigorous, profitable, and scalable food enterprises."'}
              </p>
              <div className="quote-author-line">
                <span className="quote-dash"></span>
                <span className="quote-author">Abdul Rasheed • Founder, Oder360</span>
              </div>
            </div>

            <div className="about-paragraphs">
              <p className="about-lead-p">{a.p1}</p>
              <p className="about-sub-p">{a.p2}</p>
              <p className="about-sub-p">{a.p3}</p>
            </div>

            {/* Impact Highlight Cards */}
            <div className="about-impact-grid">
              <div className="impact-pill-card">
                <div className="impact-icon-badge gold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <div className="impact-card-text">
                  <span className="impact-title">{a.highlight1Title}</span>
                  <span className="impact-desc">{a.highlight1Text}</span>
                </div>
              </div>

              <div className="impact-pill-card">
                <div className="impact-icon-badge crimson">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div className="impact-card-text">
                  <span className="impact-title">{a.highlight2Title}</span>
                  <span className="impact-desc">{a.highlight2Text}</span>
                </div>
              </div>

              <div className="impact-pill-card">
                <div className="impact-icon-badge emerald">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                  </svg>
                </div>
                <div className="impact-card-text">
                  <span className="impact-title">{a.highlight3Title}</span>
                  <span className="impact-desc">{a.highlight3Text}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Executive Profile Card */}
          <div className="about-visual-col fade-in-right">
            <div className="founder-executive-card">
              <div className="founder-glow-backdrop" aria-hidden="true"></div>

              {/* Photo Frame */}
              <div className="founder-photo-frame">
                <div className="founder-photo-halo"></div>
                <div className="founder-photo-inner">
                  <Image
                    src="/images/assets/brand/owner.png"
                    alt="Abdul Rasheed - Founder & CEO Oder360"
                    width={220}
                    height={220}
                    className="founder-portrait-img"
                    priority
                  />
                </div>
                <div className="founder-verified-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>

              {/* Title & Name */}
              <div className="founder-heading-wrap">
                <h3 className="founder-display-name">Abdul Rasheed</h3>
                <span className="founder-badge-role">{a.profileRole}</span>
              </div>

              {/* Credentials List */}
              <div className="founder-credentials-stack">
                <div className="credential-row">
                  <div className="cred-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <span className="cred-text">{a.credential1}</span>
                </div>

                <div className="credential-row">
                  <div className="cred-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <span className="cred-text">{a.credential2}</span>
                </div>

                <div className="credential-row">
                  <div className="cred-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <span className="cred-text">{a.credential3}</span>
                </div>

                <div className="credential-row">
                  <div className="cred-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span className="cred-text">{a.location}</span>
                </div>
              </div>

              {/* Direct Founder Consultation CTA */}
              <div className="founder-cta-wrapper">
                <button
                  onClick={handleOpenConsultation}
                  className="founder-direct-btn"
                  id="about-founder-consultation"
                >
                  <span>{lang === 'ar' ? 'تواصل مباشرة مع عبد الرشيد' : 'Consult Directly With Abdul Rasheed'}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
