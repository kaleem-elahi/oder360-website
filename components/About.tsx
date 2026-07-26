'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text fade-in-left">
            <h2 className="section-title">{a.sectionTitle}</h2>
            <p className="about-description">{a.p1}</p>
            <p className="about-description">{a.p2}</p>
            <p className="about-description">
              <strong>{a.p3.split('.')[0]}.</strong> {a.p3.split('.').slice(1).join('.').trim()}
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">✓</div>
                <div className="highlight-text">
                  <strong>{a.highlight1Title}</strong> {a.highlight1Text}
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">✓</div>
                <div className="highlight-text">
                  <strong>{a.highlight2Title}</strong> {a.highlight2Text}
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">✓</div>
                <div className="highlight-text">
                  <strong>{a.highlight3Title}</strong> {a.highlight3Text}
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual fade-in-right">
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-image-wrapper">
                  <div className="profile-image-gradient"></div>
                  <div className="profile-image">
                    <Image
                      src="/images/assets/brand/owner.png"
                      alt="Abdul Rasheed - Founder & CEO"
                      width={200}
                      height={200}
                      className="profile-photo"
                      priority
                    />
                  </div>
                </div>
                <div className="profile-title">
                  <h3>Abdul Rasheed</h3>
                  <p className="profile-role">{a.profileRole}</p>
                </div>
              </div>

              <div className="profile-body">
                <div className="profile-credentials">
                  <div className="credential-tag">
                    <span className="credential-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                    </span>
                    <span>{a.credential1}</span>
                  </div>
                  <div className="credential-tag">
                    <span className="credential-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </span>
                    <span>{a.credential2}</span>
                  </div>
                  <div className="credential-tag">
                    <span className="credential-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </span>
                    <span>{a.credential3}</span>
                  </div>
                </div>

                <div className="profile-location">
                  <div className="location-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span>{a.location}</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="card-decoration top-right"></div>
              <div className="card-decoration bottom-left"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
