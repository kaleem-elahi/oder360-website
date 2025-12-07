'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import PortfolioModal from './PortfolioModal'

const portfolioItems = [
  {
    title: 'Pizzaty',
    subtitle: 'Italian Pizza Restaurant',
    description: 'Complete restaurant operations management including menu development, kitchen design, and staff training. Achieved 20% MoM growth.',
    image: '/images/assets/Website/Pizzaty/IMG_7715.jpg',
    logo: '/images/assets/Website/Pizzaty/Pizzaty LOGO.png',
    category: 'QSR',
    images: [
      '/images/assets/Website/Pizzaty/IMG_7715.jpg',
      '/images/assets/Website/Pizzaty/IMG_0891.jpg',
      '/images/assets/Website/Pizzaty/IMG_0865.jpg',
      '/images/assets/Website/Pizzaty/IMG_0863.jpg',
      '/images/assets/Website/Pizzaty/WhatsApp Image 2024-09-08 at 18.15.22_b58ce15c.jpg',
      '/images/assets/Website/Pizzaty/WhatsApp Image 2024-09-08 at 18.15.23_d46e6f31.jpg',
      '/images/assets/Website/Pizzaty/WhatsApp Image 2024-10-17 at 14.50.45_173f2295.jpg',
    ],
    businessDetails: {
      location: 'UAE',
      type: 'Quick Service Restaurant (QSR)',
      achievements: [
        'Achieved 20% month-over-month sales growth in Q1',
        'Launched with comprehensive operations setup',
        'Established efficient kitchen workflows',
        'Trained team of 25+ staff members',
      ],
      services: [
        'Menu Development',
        'Kitchen Design',
        'Staff Training',
        'Operations Management',
        'Quality Control',
      ],
    },
  },
  {
    title: '20UR Coffee',
    subtitle: 'Premium Coffee Shop',
    description: 'KSA to UAE expansion with comprehensive operations setup. Achieved 90%+ customer satisfaction.',
    image: '/images/assets/Website/20UR Coffee/DSC00517 copy.jpg',
    logo: '/images/assets/Website/20UR Coffee/20_ur_LOGO-png.png',
    category: 'Cafe',
    images: [
      '/images/assets/Website/20UR Coffee/DSC00517 copy.jpg',
      '/images/assets/Website/20UR Coffee/DSC00518 copy.jpg',
      '/images/assets/Website/20UR Coffee/DSC00519 copy.jpg',
      '/images/assets/Website/20UR Coffee/DSC00520 copy.jpg',
      '/images/assets/Website/20UR Coffee/DSC00521 copy.jpg',
      '/images/assets/Website/20UR Coffee/DSC00526 copy.jpg',
      '/images/assets/Website/20UR Coffee/Cheese Croissant 1.jpg',
      '/images/assets/Website/20UR Coffee/Halloumi & Avo.jpg',
      '/images/assets/Website/20UR Coffee/Labnah Avo.jpg',
      '/images/assets/Website/20UR Coffee/Peanut Butter Tost.jpg',
      '/images/assets/Website/20UR Coffee/Turkey & Cheese 1.jpg',
    ],
    businessDetails: {
      location: 'UAE (KSA Franchise)',
      type: 'Specialty Coffee Shop',
      achievements: [
        'Successfully expanded from KSA to UAE market',
        'Achieved 90%+ customer satisfaction rating',
        'Established premium coffee operations',
        'Launched with full menu and operations setup',
      ],
      services: [
        'Franchise Setup',
        'Operations Management',
        'Menu Development',
        'Staff Training',
        'Brand Adaptation',
      ],
    },
  },
  {
    title: 'Capsica',
    subtitle: 'Italian Fine Dining',
    description: 'Fast-casual F&B brand management with focus on operational efficiency and cost control.',
    image: '/images/assets/Website/Capsica/PIZZA.jpg',
    logo: '/images/assets/Website/Capsica/Capsica Logo Copy.png',
    category: 'Fine Dining',
    images: [
      '/images/assets/Website/Capsica/PIZZA.jpg',
      '/images/assets/Website/Capsica/RISOTTO SALMON.jpg',
      '/images/assets/Website/Capsica/PASTA ARRABBIATA AIOLI.jpg',
      '/images/assets/Website/Capsica/CREAMY PESTO WITH MEAT & SHRIMP.jpg',
      '/images/assets/Website/Capsica/COCKTAIL MEAT BALL.jpg',
      '/images/assets/Website/Capsica/LAS VEGANS.jpg',
      '/images/assets/Website/Capsica/DSC_3853.jpg',
      '/images/assets/Website/Capsica/RED VALVET ICED LATTE.jpg',
      '/images/assets/Website/Capsica/SATCHI CAPSICA.jpg',
    ],
    businessDetails: {
      location: 'UAE',
      type: 'Fast-Casual Italian Restaurant',
      achievements: [
        'Optimized operational efficiency by 15%',
        'Reduced food costs through strategic menu engineering',
        'Improved service speed and quality',
        'Enhanced customer experience and satisfaction',
      ],
      services: [
        'Operations Management',
        'Cost Control',
        'Menu Engineering',
        'Quality Assurance',
        'Staff Development',
      ],
    },
  },
  {
    title: 'Gemello',
    subtitle: 'Multi-Concept Restaurant',
    description: 'Multi-branch operations management with consistent quality standards and profitability optimization.',
    image: '/images/assets/Website/Gemello/1 (3).jpg',
    logo: '/images/assets/Website/Gemello/Gemello Logo png.png',
    category: 'Multi-Concept',
    images: [
      '/images/assets/Website/Gemello/1 (3).jpg',
      '/images/assets/Website/Gemello/23.jpg',
      '/images/assets/Website/Gemello/24.jpg',
      '/images/assets/Website/Gemello/Profile Picture.jpg',
    ],
    businessDetails: {
      location: 'Muscat, Sultanate of Oman',
      type: 'Multi-Concept F&B Brand',
      achievements: [
        'Managed 2 fast-casual brands across 4 branches',
        'Achieved 10% profitability rise within one year',
        'Reduced employee turnover by 22%',
        'Enhanced kitchen efficiency by 15%',
      ],
      services: [
        'Multi-Location Management',
        'Operations Optimization',
        'Staff Training & Development',
        'Financial Management',
        'Quality Control',
      ],
    },
  },
  {
    title: 'Karakccino',
    subtitle: 'Specialty Coffee',
    description: 'Specialty coffee concept with unique operations model and exceptional customer experience.',
    image: '/images/assets/Website/Karakccino/IMG_9372.jpg',
    logo: null,
    category: 'Coffee',
    images: [
      '/images/assets/Website/Karakccino/IMG_9372.jpg',
      '/images/assets/Website/Karakccino/IMG_9364.jpg',
      '/images/assets/Website/Karakccino/DSC_3893.jpg',
      '/images/assets/Website/Karakccino/DSC_0053.jpg',
      '/images/assets/Website/Karakccino/DSC_0037.jpg',
      '/images/assets/Website/Karakccino/DSC_0030.jpg',
      '/images/assets/Website/Karakccino/DSC_0027.jpg',
      '/images/assets/Website/Karakccino/DSC_0016.jpg',
      '/images/assets/Website/Karakccino/DSC_0012.jpg',
      '/images/assets/Website/Karakccino/DSC_0011.jpg',
      '/images/assets/Website/Karakccino/_DSC1458.jpg',
    ],
    businessDetails: {
      location: 'UAE',
      type: 'Specialty Coffee & Food Concept',
      achievements: [
        'Launched unique coffee and food concept',
        'Established distinctive brand identity',
        'Created exceptional customer experience',
        'Developed innovative menu offerings',
      ],
      services: [
        'Concept Development',
        'Brand Identity',
        'Menu Creation',
        'Operations Setup',
        'Customer Experience Design',
      ],
    },
  },
]

export default function Portfolio() {
  const [selectedBrand, setSelectedBrand] = useState<typeof portfolioItems[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  const handleCardClick = (brand: typeof portfolioItems[0]) => {
    setSelectedBrand(brand)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      setSelectedBrand(null)
    }, 300)
  }

  return (
    <>
      <section className="portfolio" id="portfolio" ref={sectionRef}>
        <div className="container">
          <div className="section-header fade-in-up">
            <div className="section-badge">Our Work</div>
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">Transforming restaurants across the UAE and GCC</p>
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="portfolio-item"
                data-aos="fade-up"
                data-delay={index * 100}
                onClick={() => handleCardClick(item)}
              >
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
                    <div className="portfolio-click-hint">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 10l-5 5-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Click to view details
                    </div>
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

      <PortfolioModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        brand={selectedBrand}
      />
    </>
  )
}
