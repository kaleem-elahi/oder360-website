import ContactModalButton from '@/components/ContactModalButton'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Consulting Services | Oder360',
    description: 'Our comprehensive consulting services including Staff Management, Financial Management, Menu Engineering, Pre-Opening Consulting, Franchise Development, and Business Optimization.',
}

const servicesList = [
    {
        title: 'Staff Management & Workforce Optimization',
        description: 'We design and manage high-performance teams that deliver consistent service, operational efficiency, and sustainable growth across single and multi-location operations.',
        scope: [
            'Strategic recruitment & manpower planning',
            'Team building, onboarding & structured training programs',
            'Performance management systems & KPI tracking',
            'Staff scheduling, productivity optimization & labor cost control',
            'Cross-functional training for operational flexibility'
        ],
        outcome: 'Lower labor cost, higher productivity, and stronger service consistency.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        )
    },
    {
        title: 'Financial & Commercial Management',
        description: 'We provide hands-on financial oversight to protect margins, improve cash flow, and support informed decision-making at every stage of growth.',
        scope: [
            'P&L analysis, interpretation & management reporting',
            'Budgeting, forecasting & break-even analysis',
            'Cost control (COGS, wastage, labor, overheads)',
            'Vendor negotiations & procurement strategy',
            'Cash flow planning & financial performance reviews'
        ],
        outcome: 'Improved profitability, cost discipline, and financial visibility.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
        )
    },
    {
        title: 'Menu Engineering & Revenue Optimization',
        description: 'We design and optimize menus using data-driven insights to improve margins, enhance guest experience, and increase average spend.',
        scope: [
            'Menu concept design & redevelopment',
            'Costing, margin analysis & profitability mapping',
            'Menu localization & cultural adaptation for the UAE market',
            'Pricing strategy & contribution margin optimization',
            'Digital menu platforms & sales mix analysis'
        ],
        outcome: 'Higher margins, smarter pricing, and increased sales per customer.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16h16V8l-6-6z"></path>
                <path d="M14 3v5h5"></path>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
            </svg>
        )
    },
    {
        title: 'Pre-Opening & Market Entry Consulting',
        description: 'We deliver end-to-end turnkey consulting to launch F&B concepts correctly, compliantly, and profitably from day one.',
        scope: [
            'Market research & feasibility studies',
            'Concept development & positioning strategy',
            'Brand identity & guest journey planning',
            'SOP creation (FOH & BOH)',
            'Licensing, compliance & operational readiness',
            'Pre-opening execution & launch support'
        ],
        outcome: 'Reduced risk, faster launch, and a strong foundation for growth.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                <polygon points="12 2 15 5 9 5 12 2"></polygon>
            </svg>
        )
    },
    {
        title: 'Franchise Development & Expansion',
        description: 'We help brands expand confidently by building scalable systems, structured franchise models, and consistent multi-location operations.',
        scope: [
            'Franchise & market feasibility assessment',
            'Brand adaptation & localization for new markets',
            'Franchise operating manuals & systems',
            'Multi-location operational frameworks',
            'Franchise performance management & audits'
        ],
        outcome: 'Controlled expansion, brand consistency, and scalable growth.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
        )
    },
    {
        title: 'Business Optimization & Performance Improvement',
        description: 'We identify operational gaps and implement practical improvements to stabilize performance, increase efficiency, and unlock growth.',
        scope: [
            'End-to-end operational audits (FOH & BOH)',
            'Process optimization & workflow improvement',
            'Revenue growth & upselling strategies',
            'KPI dashboards & performance analytics',
            '30-, 60-, and 90-day improvement roadmaps'
        ],
        outcome: 'Operational clarity, cost efficiency, and measurable performance gains.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
        )
    }
]

const additionalServices = [
    {
        title: 'Procurement & Supply Chain Management',
        items: [
            'Supplier sourcing & contract negotiation',
            'Central kitchen & production planning',
            'Inventory control systems & wastage reduction'
        ]
    },
    {
        title: 'Compliance, Hygiene & Food Safety',
        items: [
            'FSMS / HACCP documentation',
            'Hygiene audits & inspection readiness',
            'Staff food safety training'
        ]
    },
    {
        title: 'Technology & Systems Advisory',
        items: [
            'POS & inventory system selection',
            'Operational reporting tools',
            'Cost-tracking & performance dashboards'
        ]
    }
]

export default function ServicesPage() {
    return (
        <>
            <Navigation />
            <main className="services-page">
                {/* Services Page Header */}
                <section className="services-page-header">
                    <div className="header-overlay"></div>
                    <div className="container relative z-10">
                        <div className="badge-modern fade-in-up">
                            <span className="badge-pulse"></span>
                            Our Consulting Services
                        </div>
                        <h1 className="header-title fade-in-up delay-1">
                            Elevate Your <span className="highlight-gradient">F&B Operations</span>
                        </h1>
                        <p className="header-subtitle fade-in-up delay-2">
                            Comprehensive consulting solutions designed to streamline operations, maximize profitability, and scale your brand.
                        </p>
                    </div>
                </section>

                {/* Detailed Services Grid */}
                <section className="detailed-services">
                    <div className="container">
                        <div className="services-wrapper">
                            {servicesList.map((service, index) => (
                                <div key={index} className={`detailed-service-card fade-in-up delay-${(index % 3) + 1}`}>
                                    <div className="service-icon-wrapper">
                                        {service.icon}
                                    </div>
                                    <h2 className="service-card-title">{service.title}</h2>
                                    <p className="service-card-desc">{service.description}</p>

                                    <div className="service-scope">
                                        <h3 className="scope-title">Scope of Service</h3>
                                        <ul className="scope-list">
                                            {service.scope.map((item, idx) => (
                                                <li key={idx}>
                                                    <span className="bullet-icon">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="service-outcome">
                                        <span className="outcome-label">Outcome:</span>
                                        <p>{service.outcome}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Additional Services Banner */}
                <section className="additional-services">
                    <div className="container">
                        <div className="additional-header fade-in-up">
                            <h2 className="additional-title">🔹 Additional Services</h2>
                            <p>Specialized focused solutions for your business foundation.</p>
                        </div>

                        <div className="additional-grid">
                            {additionalServices.map((service, index) => (
                                <div key={index} className={`additional-card fade-in-up delay-${index + 1}`}>
                                    <h3 className="additional-card-title">{service.title}</h3>
                                    <ul className="additional-list">
                                        {service.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="services-cta">
                    <div className="container">
                        <div className="cta-content fade-in-up">
                            <h2 className="cta-title">Ready to transform your operations?</h2>
                            <p className="cta-desc">Let's discuss how our tailored consulting services can bring measurable growth to your brand.</p>
                            <ContactModalButton
                                className="btn-modern btn-primary-modern border-none cursor-pointer text-left"
                                style={{ fontFamily: 'inherit' }}
                            >
                                Get in Touch
                                <span className="btn-icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </ContactModalButton>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
