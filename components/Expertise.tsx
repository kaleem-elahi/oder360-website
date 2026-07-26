'use client'

import React, {
  useEffect,
  useRef,
} from 'react'
import {
  Banknote,
  BarChart3,
  Flame,
  Palette,
  ScrollText,
  Store
} from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

const expertiseIcons = [
  <ScrollText className="w-10 h-10" key="scroll" />,
  <Banknote className="w-10 h-10" key="banknote" />,
  <Palette className="w-10 h-10" key="palette" />,
  <BarChart3 className="w-10 h-10" key="barchart" />,
  <Flame className="w-10 h-10" key="flame" />,
  <Store className="w-10 h-10" key="store" />,
]

const expertiseColors = ['#FF6B35', '#004E89', '#FFB800', '#22C55E', '#EF4444', '#6366F1']

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const isPausedRef = useRef(false)
  const { t } = useLanguage()
  const items = t.expertise.items

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

    const expertiseItems = sectionRef.current?.querySelectorAll('.expertise-item')
    expertiseItems?.forEach((item) => observer.observe(item))

    return () => {
      expertiseItems?.forEach((item) => observer.unobserve(item))
    }
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const speed = 0.7

    let animationFrameId: number

    const step = () => {
      if (!container || isPausedRef.current) {
        animationFrameId = requestAnimationFrame(step)
        return
      }

      const maxScroll = container.scrollWidth - container.clientWidth

      if (maxScroll > 0) {
        if (container.scrollLeft >= maxScroll - 1) {
          container.scrollLeft = 0
        } else {
          container.scrollLeft += speed
        }
      }

      animationFrameId = requestAnimationFrame(step)
    }

    animationFrameId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="expertise" ref={sectionRef} id="expertise">
      <div className="expertise-bg-shape expertise-bg-shape-1"></div>
      <div className="expertise-bg-shape expertise-bg-shape-2"></div>
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">{t.expertise.sectionTitle}</h2>
          <p className="section-subtitle">{t.expertise.sectionSubtitle}</p>
        </div>
        <div
          className="expertise-scroll"
          aria-label="Expertise cards horizontal scroller"
          ref={scrollRef}
          onMouseEnter={() => { isPausedRef.current = true }}
          onMouseLeave={() => { isPausedRef.current = false }}
          onTouchStart={() => { isPausedRef.current = true }}
          onTouchEnd={() => { isPausedRef.current = false }}
        >
          <div className="expertise-grid">
            {items.map((item, index) => (
              <div
                key={index}
                className="expertise-item"
                style={{ '--accent-color': expertiseColors[index] } as React.CSSProperties}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="expertise-bg-icon">{expertiseIcons[index]}</div>
                <h3 className="expertise-title">{item.title}</h3>
                <p className="expertise-description">{item.description}</p>
                <div className="expertise-card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
