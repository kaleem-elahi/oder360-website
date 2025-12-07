'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const featuredItems = [
  {
    number: '01',
    title: 'Pizza from Italian Style',
    description: 'Specialized Italian-style pizza with secret recipe sauces and authentic pizza base',
    image: '/images/assets/Website/Pizzaty/IMG_7715.jpg',
  },
  {
    number: '02',
    title: 'Culinary Excellence',
    description: 'Fine dining and restaurant operations with focus on quality and customer satisfaction',
    image: '/images/assets/Website/Capsica/RISOTTO SALMON.jpg',
  },
  {
    number: '03',
    title: 'Coffee Culture',
    description: 'Premium coffee shop operations and specialty beverage programs',
    image: '/images/assets/Website/20UR Coffee/DSC00517 copy.jpg',
  },
]

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible')
          }, index * 200)
        }
      })
    }, observerOptions)

    const items = sectionRef.current?.querySelectorAll('.featured-item')
    items?.forEach((item) => observer.observe(item))

    return () => {
      items?.forEach((item) => observer.unobserve(item))
    }
  }, [])

  return (
    <section className="featured-work" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in-up">
          <div className="section-badge">Featured</div>
          <h2 className="section-title">Our Featured Works</h2>
          <p className="section-subtitle">Showcasing excellence in F&B operations and culinary innovation</p>
        </div>
        <div className="featured-grid">
          {featuredItems.map((item, index) => (
            <div key={index} className="featured-item" data-aos="fade-up" data-delay={index * 150}>
              <div className="featured-number">{item.number}</div>
              <div className="featured-image-wrapper">
                <div className="featured-image-placeholder">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="featured-image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </div>
                <div className="featured-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
              <div className="featured-content">
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
