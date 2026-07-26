'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

const statsNumbers = [12, 8, 4, 100]

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
    const statNumbers = sectionRef.current?.querySelectorAll('.stat-number')
    statNumbers?.forEach((stat) => {
      const target = parseInt(stat.getAttribute('data-target') || '0')
      const duration = 2000
      const increment = target / (duration / 16)
      let current = 0

      const updateCounter = () => {
        current += increment
        if (current < target) {
          stat.textContent = Math.floor(current).toString()
          requestAnimationFrame(updateCounter)
        } else {
          stat.textContent = target.toString()
        }
      }

      updateCounter()
    })
  }

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {statsNumbers.map((num, index) => (
            <div key={index} className="stat-item" data-aos="fade-up" data-delay={index * 100}>
              <div className="stat-number" data-target={num}>
                0
              </div>
              <div className="stat-label">{t.stats.labels[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
