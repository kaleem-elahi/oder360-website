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
    src: '/images/assets/Website/20UR Coffee/cheese-croissant-1.jpg',
    alt: 'Freshly baked pastries',
    title: 'Artisan Baking',
    category: 'food',
  },
  {
    src: '/images/assets/Website/Pizzaty/restaurant-0891.jpg',
    alt: 'Restaurant operations',
    title: 'Operations Flow',
    category: 'operations',
  },
  {
    src: '/images/assets/Website/Capsica/risotto-salmon.jpg',
    alt: 'Fine dining presentation',
    title: 'Fine Dining',
    category: 'food',
  },
  {
    src: '/images/assets/Website/20UR Coffee/cafe00521.jpg',
    alt: 'Coffee shop operations',
    title: 'Cafe Operations',
    category: 'operations',
  },
  {
    src: '/images/assets/Website/Capsica/pasta-arrabbiata-aioli.jpg',
    alt: 'Italian pasta dishes',
    title: 'Italian Cuisine',
    category: 'food',
  },
  {
    src: '/images/assets/Website/Pizzaty/restaurant-0865.jpg',
    alt: 'Restaurant kitchen',
    title: 'Kitchen Operations',
    category: 'kitchen',
  },
  {
    src: '/images/assets/Website/Karakccino/restaurant-9372.jpg',
    alt: 'Specialty coffee and food',
    title: 'Specialty Coffee',
    category: 'food',
  },
]

export default function ImageGallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'kitchen' | 'food' | 'operations'>('all')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const filteredImages =
    activeFilter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter)

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      setSelectedImage(null)
    }, 300)
  }

  const handleNextImage = () => {
    if (!selectedImage) return
    const currentIndex = filteredImages.findIndex((img) => img.src === selectedImage.src)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
  }

  const handlePrevImage = () => {
    if (!selectedImage) return
    const currentIndex = filteredImages.findIndex((img) => img.src === selectedImage.src)
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    setSelectedImage(filteredImages[prevIndex])
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleCloseModal()
      } else if (e.key === 'ArrowRight' && isModalOpen && selectedImage) {
        handleNextImage()
      } else if (e.key === 'ArrowLeft' && isModalOpen && selectedImage) {
        handlePrevImage()
      }
    }
    if (isModalOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen, selectedImage])

  const slidingImages = [...filteredImages, ...filteredImages]

  return (
    <section className="image-gallery" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in-up">
          <div className="section-badge">Gallery</div>
          <h2 className="section-title">Behind the Scenes</h2>
          <p className="section-subtitle">Experience the artistry and precision of our operations</p>
        </div>


        <div className="gallery-track">
          <div className="gallery-track-inner">
            {slidingImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="gallery-item"
                data-category={image.category}
                onClick={() => handleImageClick(image)}
              >
                <div className="gallery-image-wrapper">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="gallery-image"
                    sizes="380px"
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
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="gallery-modal-overlay" onClick={handleCloseModal}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={handleCloseModal} aria-label="Close modal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <button className="gallery-modal-nav gallery-modal-prev" onClick={handlePrevImage} aria-label="Previous image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="gallery-modal-nav gallery-modal-next" onClick={handleNextImage} aria-label="Next image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <div className="gallery-modal-content">
              <div className="gallery-modal-image-wrapper">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="gallery-modal-image"
                  sizes="90vw"
                  priority
                />
              </div>
              <div className="gallery-modal-info">
                <h3>{selectedImage.title}</h3>
                <span className="gallery-modal-category">{selectedImage.category}</span>
                <p className="gallery-modal-counter">
                  {filteredImages.findIndex((img) => img.src === selectedImage.src) + 1} / {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
