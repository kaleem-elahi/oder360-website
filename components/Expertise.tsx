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

const expertiseItems = [
  {
    icon: <ScrollText className="w-10 h-10" />,
    title: 'Menu Creation',
    description: 'Development of innovative menus that balance customer appeal with profitability',
    color: '#FF6B35'
  },
  {
    icon: <Banknote className="w-10 h-10" />,
    title: 'Cost & Budget Management',
    description: 'Expert financial oversight and budget preparation to maximize profitability',
    color: '#004E89'
  },
  {
    icon: <Palette className="w-10 h-10" />,
    title: 'Brand Conceptualization',
    description: 'From concept to establishment - complete brand design and development',
    color: '#FFB800'
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: 'P&L Analysis',
    description: 'Comprehensive profit and loss analysis to identify growth opportunities',
    color: '#22C55E'
  },
  {
    icon: <Flame className="w-10 h-10" />,
    title: 'Secret Recipe Development',
    description: 'Specialized in sauce recipes and pizza base development for Italian-style cuisine',
    color: '#EF4444'
  },
  {
    icon: <Store className="w-10 h-10" />,
    title: 'Pre-Opening Operations',
    description: 'Complete setup from kitchen layout to supply chain establishment',
    color: '#6366F1'
  },
]

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const isPausedRef = useRef(false)

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

    const items = sectionRef.current?.querySelectorAll('.expertise-item')
    items?.forEach((item) => observer.observe(item))

    return () => {
      items?.forEach((item) => observer.unobserve(item))
    }
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const speed = 0.7 // pixels per frame equivalent – slow, smooth

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
          <h2 className="section-title">My Expertise</h2>
          <p className="section-subtitle">Comprehensive F&B operations expertise from concept to establishment</p>
        </div>
        <div
          className="expertise-scroll"
          aria-label="Expertise cards horizontal scroller"
          ref={scrollRef}
          onMouseEnter={() => {
            isPausedRef.current = true
          }}
          onMouseLeave={() => {
            isPausedRef.current = false
          }}
          onTouchStart={() => {
            isPausedRef.current = true
          }}
          onTouchEnd={() => {
            isPausedRef.current = false
          }}
        >
          <div className="expertise-grid">
            {expertiseItems.map((item, index) => (
              <div
                key={index}
                className="expertise-item"
                style={{ '--accent-color': item.color } as React.CSSProperties}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="expertise-bg-icon">{item.icon}</div>
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



