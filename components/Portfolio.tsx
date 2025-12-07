'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const portfolioItems = [
  {
    title: 'Cafe Rashed Ali Pro',
    subtitle: 'Abu Dhabi, UAE',
    description: 'Complete restaurant operations management including menu development, kitchen design, and staff training',
    image: '/images/portfolio/cafe-rashed-ali.jpg',
  },
  {
    title: 'Capsica',
    subtitle: 'Muscat, Sultanate of Oman',
    description: 'Fast-casual F&B brand management with focus on operational efficiency and cost control',
    image: '/images/portfolio/capsica.jpg',
  },
  {
    title: 'Gemello',
    subtitle: 'Muscat, Sultanate of Oman',
    description: 'Multi-branch operations management with consistent quality standards and profitability optimization',
    image: '/images/portfolio/gemello.jpg',
  },
  {
    title: 'Desert Cafe Suwaiq',
    subtitle: 'Sultanate of Oman',
    description: 'Cafe concept development and operations management in Suwaiq',
    image: '/images/portfolio/desert-cafe.jpg',
  },
  {
    title: 'Pizza - Italian Style',
    subtitle: 'Featured Work',
    description: 'Specialized in Italian-style pizza with secret recipe sauces and pizza base development',
    image: '/images/portfolio/pizza-italian.jpg',
  },
  {
    title: 'Multi-Concept Operations',
    subtitle: 'UAE & Oman',
    description: 'Expertise across various F&B concepts: Fine Dining, QSR, Buffet, All Day Dining, and more',
    image: '/images/portfolio/multi-concept.jpg',
  },
]

export default function Portfolio() {
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

    const items = sectionRef.current?.querySelectorAll('.portfolio-item')
    items?.forEach((item) => observer.observe(item))

    return () => {
      items?.forEach((item) => observer.unobserve(item))
    }
  }, [])

  return (
    <section className="portfolio" id="portfolio" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">Successfully managed brands and projects across the UAE</p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item" data-aos="fade-up" data-delay={index * 100}>
              <div className="portfolio-image">
                <div className="portfolio-image-wrapper">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="portfolio-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

