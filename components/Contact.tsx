'use client'

import { FormEvent, useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    gtag_report_conversion?: (url: string) => void;
  }
}

const SERVICE_TAGS = [
  { en: 'Pre-Opening & Turnkey', ar: 'تأسيس وتشغيل متكامل' },
  { en: 'Profit & Cost Optimization', ar: 'تحسين الأرباح والتكاليف' },
  { en: 'Menu Engineering', ar: 'تطوير وهندسة المنيو' },
  { en: 'Staff & Operations Management', ar: 'إدارة وتدريب الكوادر' },
]

export default function Contact() {
  const { t, lang } = useLanguage()
  const c = t.contact

  const [selectedTag, setSelectedTag] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag)
    const prefix = lang === 'ar' ? `[طلب استشارة: ${tag}]\n` : `[Service of Interest: ${tag}]\n`
    if (!formData.message.startsWith('[')) {
      setFormData(prev => ({
        ...prev,
        message: prefix + prev.message
      }))
    } else {
      // replace tag prefix
      const cleaned = formData.message.replace(/^\[.*?\]\n?/, '')
      setFormData(prev => ({
        ...prev,
        message: prefix + cleaned
      }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setNotification({
          message: data.message || c.successMessage,
          type: 'success',
        })

        // Fire Google Ads & Meta Pixel conversion event on successful form submission
        try {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'conversion', {
              send_to: 'AW-18169896326/jqbOCMbqm_gcEIa7ithD'
            })
          }
          if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'Lead')
          }
        } catch (e) {
          // Silently ignore if tags are not available
        }

        setFormData({ name: '', email: '', phone: '', message: '' })
        setSelectedTag('')
      } else {
        setNotification({
          message: data.error || c.errorMessage,
          type: 'error',
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setNotification({
        message: c.errorRetry,
        type: 'error',
      })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => { setNotification(null) }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="contact-luxury-section" id="contact">
      <div className="container">
        <div className="contact-luxury-grid">
          {/* Left Column: Direct channels and reassurance */}
          <div className="contact-info-col fade-in-left">
            <div className="section-eyebrow">
              <span className="eyebrow-spark">✦</span>
              <span>{lang === 'ar' ? 'ابدأ خطوتك القادمة' : 'TAKE THE NEXT STEP'}</span>
            </div>

            <h2 className="contact-luxury-title">{c.sectionTitle}</h2>
            <p className="contact-luxury-lead">{c.description}</p>

            <div className="contact-cards-stack">
              {/* Phone Card */}
              <a
                href="tel:+971547454416"
                className="contact-channel-card"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.fbq) {
                    window.fbq('track', 'Contact')
                  }
                  if (typeof window !== 'undefined' && window.gtag_report_conversion) {
                    return window.gtag_report_conversion('tel:+971547454416')
                  }
                }}
              >
                <div className="channel-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="channel-info">
                  <span className="channel-lbl">{lang === 'ar' ? 'الاتصال المباشر' : 'Direct Line'}</span>
                  <span className="channel-val">{c.phone}</span>
                </div>
                <span className="channel-arrow">→</span>
              </a>

              {/* Email Card */}
              <a href="mailto:contact@oder360.com" className="contact-channel-card">
                <div className="channel-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="channel-info">
                  <span className="channel-lbl">{lang === 'ar' ? 'البريد الإلكتروني' : 'Executive Inquiry'}</span>
                  <span className="channel-val">{c.email}</span>
                </div>
                <span className="channel-arrow">→</span>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/971547454416"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card whatsapp-highlight"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.fbq) {
                    window.fbq('track', 'Contact')
                  }
                }}
              >
                <div className="channel-icon-box green">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <div className="channel-info">
                  <span className="channel-lbl">{lang === 'ar' ? 'محادثة فورية عبر واتساب' : 'Instant WhatsApp Discussion'}</span>
                  <span className="channel-val">{lang === 'ar' ? 'انقر للبدء مباشرة' : 'Click to chat with Abdul Rasheed'}</span>
                </div>
                <span className="channel-arrow">→</span>
              </a>
            </div>

            {/* Reassurance pill */}
            <div className="confidentiality-guarantee">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>
                {lang === 'ar'
                  ? 'جميع المراسلات تخضع لسرية تامة واتفاقيات عدم إفصاح عند الطلب.'
                  : 'All inquiries handled with strict confidentiality. Non-Disclosure Agreements provided upon request.'}
              </span>
            </div>
          </div>

          {/* Right Column: Modern Executive Form */}
          <div className="contact-form-col fade-in-right">
            <div className="form-card-luxury">
              <div className="form-header">
                <h3 className="form-title">
                  {lang === 'ar' ? 'طلب استشارة أو مراجعة نطاق العمل' : 'Request Operational Consultation'}
                </h3>
                <p className="form-subtitle">
                  {lang === 'ar'
                    ? 'أدخل بياناتك وسنعاود التواصل معك خلال 24 ساعة عمل.'
                    : 'Fill out the form below. We will analyze your concept and get back within 24 hours.'}
                </p>
              </div>

              {/* Service Interest Chips */}
              <div className="service-interest-wrap">
                <span className="chips-label">
                  {lang === 'ar' ? 'ما الخدمة الأكثر صلة باحتياجك؟' : 'Select Primary Area of Focus:'}
                </span>
                <div className="chips-list">
                  {SERVICE_TAGS.map((tag, idx) => {
                    const label = lang === 'ar' ? tag.ar : tag.en
                    const isActive = selectedTag === label
                    return (
                      <button
                        key={idx}
                        type="button"
                        className={`chip-btn ${isActive ? 'active' : ''}`}
                        onClick={() => handleTagClick(label)}
                      >
                        {label}
                      </button>
                    )
                  })}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="form-luxury-fields" id="contactForm">
                <div className="input-field-wrap">
                  <label htmlFor="name" className="field-label">{lang === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={c.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="luxury-input"
                  />
                </div>

                <div className="fields-row-two">
                  <div className="input-field-wrap">
                    <label htmlFor="email" className="field-label">{lang === 'ar' ? 'البريد الإلكتروني *' : 'Email Address *'}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={c.emailPlaceholder}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="luxury-input"
                    />
                  </div>

                  <div className="input-field-wrap">
                    <label htmlFor="phone" className="field-label">{lang === 'ar' ? 'رقم الهاتف / الواتساب' : 'Phone / WhatsApp'}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder={c.phonePlaceholder}
                      value={formData.phone}
                      onChange={handleChange}
                      className="luxury-input"
                    />
                  </div>
                </div>

                <div className="input-field-wrap">
                  <label htmlFor="message" className="field-label">{lang === 'ar' ? 'تفاصيل المشروع / التحدي الحالي *' : 'Project Details / Operational Challenge *'}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={c.messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="luxury-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-luxury-submit"
                  disabled={isSubmitting}
                  id="contact-submit-btn"
                >
                  <span>{isSubmitting ? c.sendingButton : c.sendButton}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>

              {notification && (
                <div
                  className={`contact-notification ${notification.type}`}
                  role="alert"
                >
                  <span className="notif-icon">
                    {notification.type === 'success' ? '✓' : '!'}
                  </span>
                  <span>{notification.message}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
