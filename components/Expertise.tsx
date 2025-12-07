'use client'

import { useEffect, useRef } from 'react'

const expertiseItems = [
  {
    icon: '📋',
    title: 'Menu Creation',
    description: 'Development of innovative menus that balance customer appeal with profitability',
  },
  {
    icon: '💰',
    title: 'Cost & Budget Management',
    description: 'Expert financial oversight and budget preparation to maximize profitability',
  },
  {
    icon: '🎨',
    title: 'Brand Conceptualization',
    description: 'From concept to establishment - complete brand design and development',
  },
  {
    icon: '📊',
    title: 'P&L Analysis',
    description: 'Comprehensive profit and loss analysis to identify growth opportunities',
  },
  {
    icon: '🍕',
    title: 'Secret Recipe Development',
    description: 'Specialized in sauce recipes and pizza base development for Italian-style cuisine',
  },
  {
    icon: '🏗️',
    title: 'Pre-Opening Operations',
    description: 'Complete setup from kitchen layout to supply chain establishment',
  },
]

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section className="expertise" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">My Expertise</h2>
          <p className="section-subtitle">Comprehensive F&B operations expertise from concept to establishment</p>
        </div>
        <div className="expertise-grid">
          {expertiseItems.map((item, index) => (
            <div key={index} className="expertise-item" data-aos="fade-up" data-delay={index * 100}>
              <div className="expertise-icon">{item.icon}</div>
              <h3 className="expertise-title">{item.title}</h3>
              <p className="expertise-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



