'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

const statsData = [
  { number: 12, suffix: '+' },
  { number: 8, suffix: '+' },
  { number: 4, suffix: '+' },
  { number: 100, suffix: '%' },
]

export default function Stats() {
  const [counted, setCounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true)
          animateCounters()
        }
        entry.target.classList.add('visible')
      })
    }, observerOptions)

    const statItems = sectionRef.current?.querySelectorAll('.stat-item')
    statItems?.forEach((item) => observer.observe(item))

    return () => {
      statItems?.forEach((item) => observer.unobserve(item))
    }
  }, [counted])

  const animateCounters = () => {
    const statCounters = sectionRef.current?.querySelectorAll('.stat-count')
    statCounters?.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0')
      const duration = 2000
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
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {statsData.map(({ number, suffix }, index) => (
            <div key={index} className="stat-item" data-aos="fade-up" data-delay={index * 100}>
              <div className="stat-number">
                <span className="stat-count" data-target={number}>0</span>
                <span className="stat-suffix">{suffix}</span>
              </div>
              <div className="stat-label">{t.stats.labels[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
