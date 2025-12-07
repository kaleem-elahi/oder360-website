'use client'

import Image from 'next/image'
import { useEffect } from 'react'

interface PortfolioModalProps {
  isOpen: boolean
  onClose: () => void
  brand: {
    title: string
    subtitle: string
    description: string
    logo: string | null
    category: string
    images: string[]
    businessDetails: {
      location: string
      type: string
      achievements: string[]
      services: string[]
    }
  } | null
}

export default function PortfolioModal({ isOpen, onClose, brand }: PortfolioModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen || !brand) return null

  return (
    <div className="portfolio-modal-overlay" onClick={onClose}>
      <div className="portfolio-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="modal-header">
          {brand.logo && (
            <div className="modal-logo">
              <Image
                src={brand.logo}
                alt={`${brand.title} logo`}
                width={120}
                height={120}
                className="logo-image"
              />
            </div>
          )}
          <div className="modal-header-content">
            <span className="modal-category">{brand.category}</span>
            <h2 className="modal-title">{brand.title}</h2>
            <p className="modal-subtitle">{brand.subtitle}</p>
          </div>
        </div>

        <div className="modal-content">
          <div className="modal-details">
            <div className="detail-section">
              <h3>Business Details</h3>
              <div className="detail-grid">
                <div className="detail-item">
                  <div className="detail-icon">📍</div>
                  <div>
                    <div className="detail-label">Location</div>
                    <div className="detail-value">{brand.businessDetails.location}</div>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon">🏢</div>
                  <div>
                    <div className="detail-label">Type</div>
                    <div className="detail-value">{brand.businessDetails.type}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h3>Achievements</h3>
              <ul className="achievements-list">
                {brand.businessDetails.achievements.map((achievement, index) => (
                  <li key={index}>
                    <span className="achievement-icon">✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h3>Services Provided</h3>
              <div className="services-tags">
                {brand.businessDetails.services.map((service, index) => (
                  <span key={index} className="service-tag">{service}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="modal-images">
            <h3>Gallery</h3>
            <div className="modal-images-grid">
              {brand.images.map((image, index) => (
                <div key={index} className="modal-image-item">
                  <Image
                    src={image}
                    alt={`${brand.title} - Image ${index + 1}`}
                    fill
                    className="modal-image"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
