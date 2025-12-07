'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: 'Staff Management',
    description: 'Comprehensive workforce solutions including recruitment, training, scheduling, performance management, and team optimization for multi-location operations.',
    features: [
      'Team Building & Training',
      'Performance Management',
      'Staff Scheduling & Optimization',
      'Cross-functional Training Programs',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    title: 'Financial Management',
    description: 'Expert financial oversight including P&L management, budgeting, cost control, vendor negotiations, and cash flow optimization to maximize profitability.',
    features: [
      'P&L Analysis & Reporting',
      'Budgeting & Forecasting',
      'Cost Control & Optimization',
      'Vendor Negotiations',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="9" y1="3" x2="9" y2="21"></line>
        <line x1="3" y1="9" x2="21" y2="9"></line>
      </svg>
    ),
    title: 'Menu Engineering',
    description: 'Strategic menu design and optimization to maximize profitability, enhance customer experience, and drive sales through data-driven menu engineering.',
    features: [
      'Menu Design & Development',
      'Profitability Analysis',
      'Localization & Adaptation',
      'Digital Menu Platforms',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
    title: 'Pre-Opening Operations',
    description: 'Complete turnkey solutions for new restaurant launches including feasibility studies, concept development, brand positioning, and operational setup.',
    features: [
      'Feasibility Studies',
      'Concept Development',
      'Brand Positioning',
      'SOP Development',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
        <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
        <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
    title: 'Franchise Development',
    description: 'Expert support for franchise expansion including market analysis, brand adaptation, operational setup, and multi-location management strategies.',
    features: [
      'Market Feasibility',
      'Brand Adaptation',
      'Multi-Location Management',
      'Franchise Operations',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
    title: 'Business Optimization',
    description: 'Continuous improvement strategies to enhance operational efficiency, reduce costs, increase profitability, and scale your business effectively.',
    features: [
      'Process Optimization',
      'Efficiency Improvements',
      'Revenue Growth Strategies',
      'Performance Analytics',
    ],
  },
]

export default function Services() {
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

    const cards = sectionRef.current?.querySelectorAll('.service-card')
    cards?.forEach((card) => observer.observe(card))

    return () => {
      cards?.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">End-to-end solutions for your F&B business in the UAE</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-aos="fade-up" data-delay={index * 100}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



