'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

const statsData = [
  {
    number: 12,
    suffix: '+',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"></circle>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
      </svg>
    )
  },
  {
    number: 15,
    suffix: '+',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    )
  },
  {
    number: 4,
    suffix: '+',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    )
  },
  {
    number: 100,
    suffix: '%',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    )
  },
]

export default function Stats() {
  const [counted, setCounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t, lang } = useLanguage()

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true)
          animateCounters()
        }
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const section = sectionRef.current
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [counted])

  const animateCounters = () => {
    const statCounters = sectionRef.current?.querySelectorAll('.stat-count')
    statCounters?.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0')
      const duration = 1800
      const increment = target / (duration / 16)
      let current = 0

      const updateCounter = () => {
        current += increment
        if (current < target) {
          counter.textContent = Math.floor(current).toString()
          requestAnimationFrame(updateCounter)
        } else {
          counter.textContent = target.toString()
        }
      }

      updateCounter()
    })
  }

  return (
    <section className="stats-luxury-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-glass-card">
          <div className="stats-ambient-glow" aria-hidden="true"></div>
          <div className="stats-grid-luxury">
            {statsData.map(({ number, suffix, icon }, index) => (
              <div key={index} className="stat-card-luxury">
                <div className="stat-icon-wrapper">
                  {icon}
                </div>
                <div className="stat-number-wrap">
                  <span className="stat-count" data-target={number}>0</span>
                  <span className="stat-suffix">{suffix}</span>
                </div>
                <div className="stat-label-luxury">
                  {t.stats.labels[index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
