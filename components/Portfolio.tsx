'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const portfolioItems = [
  {
    title: 'Pizzaty',
    subtitle: 'Italian Pizza Restaurant',
    description: 'Complete restaurant operations management including menu development, kitchen design, and staff training. Achieved 20% MoM growth.',
    image: '/images/assets/Website/Pizzaty/IMG_7715.jpg',
    logo: '/images/assets/Website/Pizzaty/Pizzaty LOGO.png',
    category: 'QSR',
  },
  {
    title: '20UR Coffee',
    subtitle: 'Premium Coffee Shop',
    description: 'KSA to UAE expansion with comprehensive operations setup. Achieved 90%+ customer satisfaction.',
    image: '/images/assets/Website/20UR Coffee/DSC00517 copy.jpg',
    logo: '/images/assets/Website/20UR Coffee/20_ur_LOGO-png.png',
    category: 'Cafe',
  },
  {
    title: 'Capsica',
    subtitle: 'Italian Fine Dining',
    description: 'Fast-casual F&B brand management with focus on operational efficiency and cost control.',
    image: '/images/assets/Website/Capsica/PIZZA.jpg',
    logo: '/images/assets/Website/Capsica/Capsica Logo Copy.png',
    category: 'Fine Dining',
  },
  {
    title: 'Gemello',
    subtitle: 'Multi-Concept Restaurant',
    description: 'Multi-branch operations management with consistent quality standards and profitability optimization.',
    image: '/images/assets/Website/Gemello/1 (3).jpg',
    logo: '/images/assets/Website/Gemello/Gemello Logo png.png',
    category: 'Multi-Concept',
  },
  {
    title: 'Karakccino',
    subtitle: 'Specialty Coffee',
    description: 'Specialty coffee concept with unique operations model and exceptional customer experience.',
    image: '/images/assets/Website/Karakccino/DSC_0011.jpg',
    logo: null,
    category: 'Coffee',
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
          <div className="section-badge">Our Work</div>
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">Transforming restaurants across the UAE and GCC</p>
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
                {item.logo && (
                  <div className="portfolio-logo">
                    <Image
                      src={item.logo}
                      alt={`${item.title} logo`}
                      width={80}
                      height={80}
                      className="logo-img"
                    />
                  </div>
                )}
                <div className="portfolio-overlay">
                  <span className="portfolio-category">{item.category}</span>
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
