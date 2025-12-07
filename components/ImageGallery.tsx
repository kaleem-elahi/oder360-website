'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface GalleryImage {
  src: string
  alt: string
  title: string
  category: 'kitchen' | 'baking' | 'operations'
  gradient: string
}

const galleryImages: GalleryImage[] = [
  {
    src: '/images/kitchen-1.jpg',
    alt: 'Modern commercial kitchen with professional chefs',
    title: 'Professional Kitchen Operations',
    category: 'kitchen',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    src: '/images/baking-1.jpg',
    alt: 'Freshly baked pastries and bread',
    title: 'Artisan Baking',
    category: 'baking',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    src: '/images/kitchen-2.jpg',
    alt: 'Chef preparing gourmet dishes',
    title: 'Culinary Excellence',
    category: 'kitchen',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    src: '/images/baking-2.jpg',
    alt: 'Beautiful cake decoration and desserts',
    title: 'Dessert Mastery',
    category: 'baking',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    src: '/images/operations-1.jpg',
    alt: 'Team coordination in restaurant kitchen',
    title: 'Team Coordination',
    category: 'operations',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  },
  {
    src: '/images/baking-3.jpg',
    alt: 'Fresh bread and pastries display',
    title: 'Fresh Daily Bakes',
    category: 'baking',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  },
  {
    src: '/images/kitchen-3.jpg',
    alt: 'Modern kitchen equipment and setup',
    title: 'State-of-the-Art Equipment',
    category: 'kitchen',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  },
  {
    src: '/images/operations-2.jpg',
    alt: 'Restaurant operations and service',
    title: 'Efficient Operations',
    category: 'operations',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  },
]

export default function ImageGallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'kitchen' | 'baking' | 'operations'>('all')
  const sectionRef = useRef<HTMLElement>(null)

  const filteredImages =
    activeFilter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter)

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
          }, index * 100)
        }
      })
    }, observerOptions)

    const items = sectionRef.current?.querySelectorAll('.gallery-item')
    items?.forEach((item) => observer.observe(item))

    return () => {
      items?.forEach((item) => observer.unobserve(item))
    }
  }, [activeFilter])

  return (
    <section className="image-gallery" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Behind the Scenes</h2>
          <p className="section-subtitle">Experience the artistry and precision of our F&B operations</p>
        </div>

        <div className="gallery-filters">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${activeFilter === 'kitchen' ? 'active' : ''}`}
            onClick={() => setActiveFilter('kitchen')}
          >
            Kitchen
          </button>
          <button
            className={`filter-btn ${activeFilter === 'baking' ? 'active' : ''}`}
            onClick={() => setActiveFilter('baking')}
          >
            Baking
          </button>
          <button
            className={`filter-btn ${activeFilter === 'operations' ? 'active' : ''}`}
            onClick={() => setActiveFilter('operations')}
          >
            Operations
          </button>
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              data-category={image.category}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gallery-image-wrapper">
                <div 
                  className="gallery-image-placeholder"
                  style={{ background: image.gradient }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="gallery-image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </div>
                <div className="gallery-overlay">
                  <h3>{image.title}</h3>
                  <span className="gallery-category">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

