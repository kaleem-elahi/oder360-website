'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRef } from 'react'

// Background images that will beautifully blur behind each question
const BG_IMAGES = [
    '/images/assets/Website/Capsica/pizza.jpg',
    '/images/assets/Website/Pizzaty/restaurant-7715.jpg',
    '/images/assets/Website/Hael/restaurant-2025-12-09-18.52.22-2.jpg',
    '/images/assets/Website/Karakccino/cafe-0016.jpg',
    '/images/assets/Website/Pizzaty/restaurant-0891.jpg',
]

const DISCUSSION_STARTERS = [
    { label: "Full Operational Review", text: "We operate a [concept type] restaurant in [Emirate] with [number] outlet(s).\nWe are currently facing challenges in [margin control / labor efficiency / inventory management / SOP consistency].\nWe would like to request a full operational audit and improvement roadmap." },
    { label: "Improve Profitability", text: "Our restaurant generates approximately [monthly revenue range].\nWe are experiencing pressure on margins due to food cost, labor, or overhead inefficiencies.\nWe need structured financial oversight, P&L clarity, and cost optimization support." },
    { label: "Pre-Opening Support", text: "We are planning to launch a [concept type] restaurant in the UAE.\nWe require support with feasibility assessment, SOP development, compliance readiness, and structured pre-opening execution." },
    { label: "Menu Optimization", text: "We would like to improve our menu profitability and pricing strategy.\nWe need margin analysis, sales mix insights, and contribution mapping to increase average check and overall revenue performance." },
    { label: "Workforce Optimization", text: "We are looking to optimize manpower structure, KPI tracking, and staff productivity.\nOur goal is to reduce labor cost while maintaining service consistency across [number] outlet(s)." },
    { label: "Franchise Development", text: "We are preparing for multi-location expansion and require structured franchise systems, operating manuals, and performance control frameworks to scale sustainably." },
    { label: "Strategic Assessment", text: "We are facing operational challenges but would prefer a structured diagnostic assessment to identify key improvement areas and define a clear action roadmap." }
]

export default function MultiStepContactModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [step, setStep] = useState(0)

    // Form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        businessAge: '',
        serviceOfInterest: '',
        message: '',
        contactPreference: '',
        phone: ''
    })

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        const handleOpen = () => {
            setIsOpen(true)
            setStep(0)
            setIsSuccess(false)
            setFormData({
                name: '', email: '', businessAge: '', serviceOfInterest: '', message: '', contactPreference: '', phone: ''
            })
            // Lock body scroll
            document.body.style.overflow = 'hidden'
        }

        window.addEventListener('open-contact-modal', handleOpen)
        return () => window.removeEventListener('open-contact-modal', handleOpen)
    }, [])

    const closeModal = () => {
        // If the form was successfully submitted, dispatch a global event
        if (isSuccess) {
            try {
                window.dispatchEvent(new CustomEvent('contact-success', { detail: { name: formData.name } }))
            } catch (e) {
                // ignore in environments without CustomEvent
            }
        }

        setIsOpen(false)
        document.body.style.overflow = ''

        // Reset modal state after it's closed so success message can be shown externally
        setTimeout(() => {
            setStep(0)
            setFormData({ name: '', email: '', businessAge: '', serviceOfInterest: '', message: '', contactPreference: '', phone: '' })
            setIsSuccess(false)
            setErrorMsg('')
        }, 300)
    }

    const handleNext = () => {
        if (step < 5) {
            setStep(s => s + 1)
            setErrorMsg('')
        } else {
            submitForm()
        }
    }

    const handlePrevious = () => {
        if (step > 0) setStep(s => s - 1)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault()
            handleNext()
        } else if (e.key === 'Enter' && step !== 3) {
            // Allow standard enter to proceed except on textarea (which is now step 3)
            e.preventDefault()
            handleNext()
        }
    }

    const submitForm = async () => {
        setIsLoading(true)
        setErrorMsg('')
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            const data = await response.json()
            if (response.ok) {
                setIsSuccess(true)
                // No auto-close — let user enjoy the success experience and take action
            } else {
                setErrorMsg(data.error || 'Something went wrong')
            }
        } catch (error) {
            setErrorMsg('Network error. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    const autoCloseRef = useRef<number | null>(null)

    useEffect(() => {
        return () => {
            if (autoCloseRef.current) {
                clearTimeout(autoCloseRef.current)
            }
        }
    }, [])

    if (!isOpen) return null

    const isFormComplete = step === 5

    return (
        <div className="typeform-modal-overlay">
            {/* Blurred sliding background */}
            {BG_IMAGES.map((src, index) => (
                <div
                    key={src}
                    className={`typeform-bg-img ${index === step ? 'active' : ''}`}
                    style={{ backgroundImage: `url('${src}')` }}
                />
            ))}
            <div className="typeform-glass-layer" />

            {/* Progress Bar */}
            <div className="typeform-progress">
                <div className="typeform-progress-bar" style={{ width: `${((step + 1) / 6) * 100}%` }} />
            </div>

            <button className="typeform-close" onClick={closeModal} aria-label="Close modal">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="typeform-content-container">

                {isSuccess ? (
                    <div className="typeform-success-immersive">
                        {/* Animated Orb */}
                        <div className="success-orb-wrapper">
                            <div className="success-orb-pulse" />
                            <div className="success-orb-pulse delay-1" />
                            <div className="success-orb">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </div>
                        </div>

                        {/* Headline */}
                        <div className="success-headline-block">
                            <p className="success-label">You&apos;re inside the 360°</p>
                            <h2 className="success-headline">Welcome, {formData.name?.split(' ')[0] || 'friend'}.</h2>
                            <p className="success-sub">Your inquiry is with us. Our team will reach out within <strong>24 hours</strong> to begin your operational journey.</p>
                        </div>

                        {/* Stats Row */}
                        <div className="success-stats">
                            <div className="success-stat">
                                <span className="stat-number">50<span className="stat-plus">+</span></span>
                                <span className="stat-label">F&amp;B Brands Served</span>
                            </div>
                            <div className="success-stat-divider" />
                            <div className="success-stat">
                                <span className="stat-number">AED 20M<span className="stat-plus">+</span></span>
                                <span className="stat-label">Revenue Optimised</span>
                            </div>
                            <div className="success-stat-divider" />
                            <div className="success-stat">
                                <span className="stat-number">98<span className="stat-plus">%</span></span>
                                <span className="stat-label">Client Retention</span>
                            </div>
                        </div>

                        {/* What Happens Next */}
                        <div className="success-next-steps">
                            <p className="success-next-label">What happens next</p>
                            <div className="success-steps-row">
                                <div className="success-step">
                                    <div className="success-step-num">01</div>
                                    <div className="success-step-text">
                                        <strong>Review</strong>
                                        <span>We analyse your inquiry within 24h</span>
                                    </div>
                                </div>
                                <div className="success-step-arrow">→</div>
                                <div className="success-step">
                                    <div className="success-step-num">02</div>
                                    <div className="success-step-text">
                                        <strong>Discovery Call</strong>
                                        <span>A tailored strategy session with our team</span>
                                    </div>
                                </div>
                                <div className="success-step-arrow">→</div>
                                <div className="success-step">
                                    <div className="success-step-num">03</div>
                                    <div className="success-step-text">
                                        <strong>Your Roadmap</strong>
                                        <span>A custom operational plan built for your business</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom CTAs */}
                        <div className="success-ctas">
                            <a
                                href="https://www.linkedin.com/in/abdulrasheed547454416"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="success-cta-btn success-cta-linkedin"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                                Follow on LinkedIn
                            </a>
                            <button className="success-cta-btn success-cta-explore" onClick={closeModal}>
                                Explore our work
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="typeform-slider-wrapper">
                        {/* STEP 0: NAME */}
                        <div className={`typeform-slide ${step === 0 ? 'active' : step < 0 ? 'prev' : 'next'}`}>
                            <div className="typeform-question-number">1 &rarr;</div>
                            <h2 className="typeform-title">May I have your name? *</h2>
                            <input
                                type="text"
                                autoFocus
                                placeholder="Type your answer here..."
                                className="typeform-input"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                onKeyDown={handleKeyDown}
                            />
                            <button
                                className="typeform-btn"
                                onClick={handleNext}
                                disabled={!formData.name.trim()}
                            >
                                OK ✓
                            </button>
                        </div>

                        {/* STEP 1: BUSINESS AGE */}
                        <div className={`typeform-slide ${step === 1 ? 'active' : step < 1 ? 'prev' : 'next'}`}>
                            <div className="typeform-question-number">2 &rarr;</div>
                            <h2 className="typeform-title">Nice to meet you, {formData.name}! How old is your Business?</h2>
                            <div className="typeform-options">
                                <button
                                    className={`typeform-option-btn ${formData.businessAge === 'Less than 5 years' ? 'selected' : ''}`}
                                    onClick={() => { setFormData({ ...formData, businessAge: 'Less than 5 years' }); handleNext() }}
                                >
                                    <span className="key-hint">A</span> Less than 5 years
                                </button>
                                <button
                                    className={`typeform-option-btn ${formData.businessAge === 'More than 5 years' ? 'selected' : ''}`}
                                    onClick={() => { setFormData({ ...formData, businessAge: 'More than 5 years' }); handleNext() }}
                                >
                                    <span className="key-hint">B</span> More than 5 years
                                </button>
                            </div>
                        </div>

                        {/* STEP 2: SERVICE OF INTEREST */}
                        <div className={`typeform-slide ${step === 2 ? 'active' : step < 2 ? 'prev' : 'next'}`}>
                            <div className="typeform-question-number">3 &rarr;</div>
                            <h2 className="typeform-title">Which service would you like to know more about...</h2>
                            <div className="service-grid">
                                <button
                                    className={`service-card-btn ${formData.serviceOfInterest === 'Open a New Concept' ? 'selected' : ''}`}
                                    onClick={() => { setFormData({ ...formData, serviceOfInterest: 'Open a New Concept' }); handleNext() }}
                                >
                                    <div className="service-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path><polygon points="12 2 15 5 9 5 12 2"></polygon></svg>
                                    </div>
                                    <span className="service-name">Open a New Concept</span>
                                </button>
                                <button
                                    className={`service-card-btn ${formData.serviceOfInterest === 'Account Audit (Financial Management)' ? 'selected' : ''}`}
                                    onClick={() => { setFormData({ ...formData, serviceOfInterest: 'Account Audit (Financial Management)' }); handleNext() }}
                                >
                                    <div className="service-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                    </div>
                                    <span className="service-name">Account Audit (Financial Management)</span>
                                </button>
                                <button
                                    className={`service-card-btn ${formData.serviceOfInterest === 'Franchise Development & Expansion' ? 'selected' : ''}`}
                                    onClick={() => { setFormData({ ...formData, serviceOfInterest: 'Franchise Development & Expansion' }); handleNext() }}
                                >
                                    <div className="service-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                    </div>
                                    <span className="service-name">Franchise Development & Expansion</span>
                                </button>
                                <button
                                    className={`service-card-btn ${formData.serviceOfInterest === 'General Inquiry' ? 'selected' : ''}`}
                                    onClick={() => { setFormData({ ...formData, serviceOfInterest: 'General Inquiry' }); handleNext() }}
                                >
                                    <div className="service-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </div>
                                    <span className="service-name">General Inquiry</span>
                                </button>
                            </div>
                        </div>

                        {/* STEP 3: DETAILS */}
                        <div className={`typeform-slide ${step === 3 ? 'active' : step < 3 ? 'prev' : 'next'}`}>
                            <div className="typeform-question-number">4 &rarr;</div>
                            <h2 className="typeform-title">Please share more details about your inquiry. *</h2>
                            <p className="typeform-subtitle">You can share the website of your company, or share the service you need for your business idea. (Ctrl+Enter to proceed)</p>

                            <textarea
                                className="typeform-input typeform-textarea"
                                placeholder="Type your answer here..."
                                value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                                onKeyDown={handleKeyDown}
                            />

                            <div className="discussion-starters">
                                <p className="starters-label">Not sure what to write? Select a structured discussion starter below:</p>
                                <div className="starters-grid">
                                    {DISCUSSION_STARTERS.map((s, i) => (
                                        <button
                                            key={i}
                                            className="starter-btn"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setFormData({ ...formData, message: s.text });
                                            }}
                                        >
                                            [ {s.label} ]
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                className="typeform-btn mt-6"
                                onClick={handleNext}
                                disabled={!formData.message.trim()}
                            >
                                OK ✓
                            </button>
                        </div>

                        {/* STEP 4: CONTACT PREF */}
                        <div className={`typeform-slide ${step === 4 ? 'active' : step < 4 ? 'prev' : 'next'}`}>
                            <div className="typeform-question-number">5 &rarr;</div>
                            <h2 className="typeform-title">What is the best way to contact you? *</h2>
                            <div className="typeform-options">
                                <button
                                    className={`typeform-option-btn align-center ${formData.contactPreference === 'Call me' ? 'selected' : ''}`}
                                    onClick={() => { setFormData({ ...formData, contactPreference: 'Call me' }); handleNext() }}
                                >
                                    <div className="icon-large">📞</div>
                                    Call me
                                </button>
                                <button
                                    className={`typeform-option-btn align-center ${formData.contactPreference === 'Email me' ? 'selected' : ''}`}
                                    onClick={() => { setFormData({ ...formData, contactPreference: 'Email me' }); handleNext() }}
                                >
                                    <div className="icon-large">✉️</div>
                                    Email me
                                </button>
                            </div>
                        </div>

                        {/* STEP 5: CONTACT DETAIL (PHONE OR EMAIL) & SUBMIT */}
                        <div className={`typeform-slide ${step === 5 ? 'active' : step < 5 ? 'prev' : 'next'}`}>
                            <div className="typeform-question-number">6 &rarr;</div>
                            <h2 className="typeform-title">
                                {formData.contactPreference === 'Call me'
                                    ? "Of course. What is your phone number? *"
                                    : "Great. What is your email address? *"}
                            </h2>

                            {formData.contactPreference === 'Call me' ? (
                                <div className="phone-input-wrapper">
                                    <span className="phone-prefix">🌍</span>
                                    <input
                                        type="tel"
                                        placeholder="+971 50 123 4567"
                                        className="typeform-input phone-input"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                        onKeyDown={handleKeyDown}
                                        autoFocus
                                    />
                                </div>
                            ) : (
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="typeform-input"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    onKeyDown={handleKeyDown}
                                    autoFocus
                                />
                            )}

                            {errorMsg && <div className="typeform-error">{errorMsg}</div>}

                            <button
                                className="typeform-btn submit-btn"
                                onClick={submitForm}
                                disabled={
                                    isLoading ||
                                    (formData.contactPreference === 'Call me' && !formData.phone.trim()) ||
                                    (formData.contactPreference === 'Email me' && (!formData.email.trim() || !formData.email.includes('@')))
                                }
                            >
                                {isLoading ? 'Submitting...' : 'Submit 🎉'}
                            </button>
                        </div>
                    </div>
                )}

            </div>

            {step > 0 && !isSuccess && (
                <div className="typeform-navigation">
                    <button className="typeform-nav-btn" onClick={handlePrevious}>
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                    </button>
                </div>
            )}
        </div>
    )
}
