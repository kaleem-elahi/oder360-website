'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

// Background images that will beautifully blur behind each question
const BG_IMAGES = [
    '/images/assets/Website/Pizzaty/restaurant-7715.jpg',
    '/images/assets/Website/Capsica/pizza.jpg',
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
                name: '', email: '', businessAge: '', message: '', contactPreference: '', phone: ''
            })
            // Lock body scroll
            document.body.style.overflow = 'hidden'
        }

        window.addEventListener('open-contact-modal', handleOpen)
        return () => window.removeEventListener('open-contact-modal', handleOpen)
    }, [])

    const closeModal = () => {
        setIsOpen(false)
        document.body.style.overflow = ''
    }

    const handleNext = () => {
        if (step < 4) {
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
        } else if (e.key === 'Enter' && step !== 2) {
            // Allow standard enter to proceed except on textarea (which is now step 2)
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
            } else {
                setErrorMsg(data.error || 'Something went wrong')
            }
        } catch (error) {
            setErrorMsg('Network error. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

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
                <div className="typeform-progress-bar" style={{ width: `${((step + 1) / 5) * 100}%` }} />
            </div>

            <button className="typeform-close" onClick={closeModal} aria-label="Close modal">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="typeform-content-container">

                {isSuccess ? (
                    <div className="typeform-slide typeform-success-slide">
                        <div className="success-icon">✓</div>
                        <h2>Thank you, {formData.name || 'friend'}!</h2>
                        <p>Your journey with Oder360 begins now. We will reach out to you shortly.</p>
                        <button className="typeform-btn typeform-btn-done" onClick={closeModal}>Go back to site</button>
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

                        {/* STEP 2: DETAILS */}
                        <div className={`typeform-slide ${step === 2 ? 'active' : step < 2 ? 'prev' : 'next'}`}>
                            <div className="typeform-question-number">3 &rarr;</div>
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

                        {/* STEP 3: CONTACT PREF */}
                        <div className={`typeform-slide ${step === 3 ? 'active' : step < 3 ? 'prev' : 'next'}`}>
                            <div className="typeform-question-number">4 &rarr;</div>
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

                        {/* STEP 4: CONTACT DETAIL (PHONE OR EMAIL) & SUBMIT */}
                        <div className={`typeform-slide ${step === 4 ? 'active' : step < 4 ? 'prev' : 'next'}`}>
                            <div className="typeform-question-number">5 &rarr;</div>
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
