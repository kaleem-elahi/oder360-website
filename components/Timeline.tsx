'use client'

import { useEffect, useRef } from 'react'

const timelineItems = [
  {
    date: '2022 - Present',
    title: 'Director of Operations – Multi Concepts',
    company: 'Mashakeek and Steak | Pizzaty | 20UR Coffee | Hael Cafe',
    location: 'Abu Dhabi, UAE',
    achievements: [
      'Launched Pizzaty with 20% MoM sales growth',
      'Opened 3+ Hael flagship outlets (35% revenue increase)',
      'Introduced 20UR Coffee franchise in UAE',
      'Reduced operational costs by 15%',
      'Increased team productivity by 18%',
    ],
  },
  {
    date: '2018 - 2021',
    title: 'Operations Manager',
    company: 'Gemello | Capsica',
    location: 'Muscat, Sultanate of Oman',
    achievements: [
      'Managed 2 fast-casual brands across 4 branches',
      'Achieved 10% profitability rise within one year',
      'Reduced employee turnover by 22%',
      'Enhanced kitchen efficiency by 15%',
    ],
  },
  {
    date: '2015 - 2018',
    title: 'Branch Manager',
    company: 'Krush Burger UAE',
    location: 'Dubai, UAE',
    achievements: [
      'Led team of 40-150 employees across multiple locations',
      'Maintained 98% compliance with quality standards',
      'Launched centralized call center (15% order volume increase)',
    ],
  },
]

export default function Timeline() {
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

    const items = sectionRef.current?.querySelectorAll('.timeline-item')
    items?.forEach((item) => observer.observe(item))

    return () => {
      items?.forEach((item) => observer.unobserve(item))
    }
  }, [])

  return (
    <section className="timeline" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">A decade of excellence in F&B operations across the UAE and GCC</p>
        </div>
        <div className="timeline-container">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item" data-aos="fade-right" data-delay={index * 100}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h3>{item.title}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-location">{item.location}</p>
                <ul className="timeline-achievements">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



