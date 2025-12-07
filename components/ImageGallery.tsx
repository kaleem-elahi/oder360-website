'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface GalleryImage {
  src: string
  alt: string
  title: string
  category: 'kitchen' | 'food' | 'operations'
}

const galleryImages: GalleryImage[] = [
  {
    src: '/images/assets/Website/Capsica/PIZZA.jpg',
    alt: 'Artisan pizza preparation',
    title: 'Artisan Pizza',
    category: 'food',
  },
  {
    src: '/images/assets/Website/20UR Coffee/Cheese Croissant 1.jpg',
    alt: 'Freshly baked pastries',
    title: 'Artisan Baking',
    category: 'food',
  },
  {
    src: '/images/assets/Website/Pizzaty/IMG_0891.jpg',
    alt: 'Restaurant operations',
    title: 'Operations Flow',
    category: 'operations',
  },
  {
    src: '/images/assets/Website/Capsica/RISOTTO SALMON.jpg',
    alt: 'Fine dining presentation',
    title: 'Fine Dining',
    category: 'food',
  },
  {
    src: '/images/assets/Website/20UR Coffee/DSC00521 copy.jpg',
    alt: 'Coffee shop operations',
    title: 'Cafe Operations',
    category: 'operations',
  },
  {
    src: '/images/assets/Website/Capsica/PASTA ARRABBIATA AIOLI.jpg',
    alt: 'Italian pasta dishes',
    title: 'Italian Cuisine',
    category: 'food',
  },
  {
    src: '/images/assets/Website/Pizzaty/IMG_0865.jpg',
    alt: 'Restaurant kitchen',
    title: 'Kitchen Operations',
    category: 'kitchen',
  },
  {
    src: '/images/assets/Website/Karakccino/IMG_9372.jpg',
    alt: 'Specialty coffee and food',
    title: 'Specialty Coffee',
    category: 'food',
  },
]

export default function ImageGallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'kitchen' | 'food' | 'operations'>('all')
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
          <div className="section-badge">Gallery</div>
          <h2 className="section-title">Behind the Scenes</h2>
          <p className="section-subtitle">Experience the artistry and precision of our operations</p>
        </div>

        <div className="gallery-filters">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${activeFilter === 'food' ? 'active' : ''}`}
            onClick={() => setActiveFilter('food')}
          >
            Food
          </button>
          <button
            className={`filter-btn ${activeFilter === 'kitchen' ? 'active' : ''}`}
            onClick={() => setActiveFilter('kitchen')}
          >
            Kitchen
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
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="gallery-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 4}
                />
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
