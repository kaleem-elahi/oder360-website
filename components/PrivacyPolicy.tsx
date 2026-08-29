'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function PrivacyPolicy() {
  const { lang } = useLanguage()
  const isAr = lang === 'ar'
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="privacy-page-wrapper" style={{ padding: '6rem 0 4rem 0', color: 'var(--text-primary)' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Header Hero Card */}
        <div 
          className="privacy-header-card"
          style={{
            background: 'var(--bg-card)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid var(--border-card)',
            borderRadius: '24px',
            padding: '2.5rem',
            marginBottom: '2.5rem',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span style={{
              background: 'rgba(0, 122, 255, 0.15)',
              color: '#007AFF',
              padding: '0.35rem 0.85rem',
              borderRadius: '50px',
              fontSize: '0.85rem',
              fontWeight: '600',
              border: '1px solid rgba(0, 122, 255, 0.3)'
            }}>
              {isAr ? 'وثيقة رسمية' : 'Legal Compliance'}
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              {isAr ? 'تاريخ النفاذ: 15 أغسطس 2026' : 'Effective Date: 15 August 2026'}
            </span>
            <span style={{ color: 'var(--text-secondary)' }}>•</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              {isAr ? 'آخر تحديث: 15 أغسطس 2026' : 'Last Updated: 15 August 2026'}
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            lineHeight: '1.2',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            {isAr ? 'سياسة الخصوصية' : 'PRIVACY POLICY'}
          </h1>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: 'var(--text-secondary)',
            maxWidth: '900px',
            marginBottom: '1.5rem'
          }}>
            {isAr
              ? 'توضح هذه السياسة كيفية قيام شركة ŌDER360 بجمع البيانات الشخصية واستخدامها والإفصاح عنها ونقلها وتخزينها وحمايتها.'
              : 'Explains how ŌDER360 collects, uses, discloses, transfers, stores and protects Personal Data.'}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border-card)'
          }}>
            <div>
              <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {isAr ? 'مسؤول البيانات' : 'Data Controller'}
              </span>
              <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>ŌDER THREE SIXTY (Abu Dhabi, UAE)</strong>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {isAr ? 'البريد الإلكتروني للخصوصية' : 'Privacy Email'}
              </span>
              <a href="mailto:contact@oder360.com" style={{ color: '#007AFF', textDecoration: 'none', fontWeight: '600' }}>
                contact@oder360.com
              </a>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {isAr ? 'التشريعات المطبقة' : 'Governing Laws'}
              </span>
              <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>UAE PDPL, GDPR & CCPA</span>
            </div>
          </div>
        </div>

        {/* Layout Grid: Sidebar TOC + Main Content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '2rem' }}>
          
          <div className="privacy-sections" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Section 1 */}
            <section id="section-1" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>1. About This Privacy Policy</h2>
              <p style={paragraphStyle}>
                ŌDER360 ("ŌDER360", "we", "us", "our") provides restaurant, café, food and beverage ("F&B") consultancy, business advisory, operational, strategic, marketing and related professional services.
              </p>
              <p style={paragraphStyle}>This Privacy Policy applies to Personal Data collected through:</p>
              <ul style={listStyle}>
                <li>our website;</li>
                <li>consultancy engagements;</li>
                <li>enquiry and contact forms;</li>
                <li>email and telephone communications;</li>
                <li>WhatsApp Business;</li>
                <li>social-media channels;</li>
                <li>meetings and events;</li>
                <li>marketing activities; and</li>
                <li>other interactions with ŌDER360.</li>
              </ul>
              <p style={paragraphStyle}>
                "Personal Data" means information relating to an identified or identifiable natural person and includes equivalent concepts such as "personal information" where applicable.
              </p>
              <p style={paragraphStyle}>
                We process Personal Data in accordance with applicable privacy legislation, including the UAE Federal Decree-Law No. 45 of 2021 concerning the Protection of Personal Data ("UAE PDPL") and, where applicable, the EU General Data Protection Regulation ("GDPR") and the California Consumer Privacy Act, as amended by the California Privacy Rights Act ("CCPA").
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>2. Data Controller</h2>
              <p style={paragraphStyle}>Unless otherwise stated in a client agreement:</p>
              <div style={infoBoxStyle}>
                <p style={{ margin: '0 0 0.5rem 0' }}><strong>Data Controller:</strong> ŌDER THREE SIXTY</p>
                <p style={{ margin: '0 0 0.5rem 0' }}><strong>Registered Address:</strong> Mohammed Bin Zayed City, Abu Dhabi, United Arab Emirates</p>
                <p style={{ margin: '0 0 0.5rem 0' }}><strong>Privacy Email:</strong> <a href="mailto:contact@oder360.com" style={{ color: '#007AFF' }}>contact@oder360.com</a></p>
                <p style={{ margin: '0 0 0.5rem 0' }}><strong>Telephone:</strong> <a href="tel:+971547454416" style={{ color: '#007AFF' }}>+971547454416</a></p>
                <p style={{ margin: 0 }}><strong>Website:</strong> <a href="https://www.oder360.com" target="_blank" rel="noopener noreferrer" style={{ color: '#007AFF' }}>www.oder360.com</a></p>
              </div>
              <p style={{ ...paragraphStyle, marginTop: '1rem' }}>
                In some consultancy engagements, ŌDER360 may process Personal Data on behalf of a client. In such circumstances, the client may be the controller and ŌDER360 may act as a processor/service provider, subject to the applicable agreement.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>3. Personal Data We Collect</h2>
              <p style={paragraphStyle}>Depending on your relationship with us, we may collect:</p>
              
              <h3 style={subTitleStyle}>Identity and Contact Data</h3>
              <ul style={listStyle}>
                <li>Name</li>
                <li>Company</li>
                <li>Job title</li>
                <li>Email address</li>
                <li>Telephone number</li>
                <li>WhatsApp number</li>
                <li>Business address</li>
                <li>Country or region</li>
              </ul>

              <h3 style={subTitleStyle}>Client and Business Data</h3>
              <ul style={listStyle}>
                <li>Project requirements</li>
                <li>Business plans</li>
                <li>Operational information</li>
                <li>Restaurant/café information</li>
                <li>Financial and costing information</li>
                <li>Supplier information</li>
                <li>Employee information supplied as part of consultancy work</li>
                <li>Contracts and project records</li>
                <li>Meeting notes</li>
                <li>Communications</li>
                <li>Invoices and payment records</li>
              </ul>

              <h3 style={subTitleStyle}>Technical and Usage Data</h3>
              <ul style={listStyle}>
                <li>IP address</li>
                <li>Browser</li>
                <li>Device information</li>
                <li>Operating system</li>
                <li>Cookie identifiers</li>
                <li>Referring URL</li>
                <li>Pages viewed</li>
                <li>Approximate geographic information derived from IP</li>
                <li>Website interaction information</li>
                <li>Advertising/conversion identifiers</li>
              </ul>

              <h3 style={subTitleStyle}>Marketing Data</h3>
              <ul style={listStyle}>
                <li>Marketing preferences</li>
                <li>Campaign interactions</li>
                <li>Advertisement interactions</li>
                <li>Website conversion events</li>
                <li>Social-media interactions</li>
              </ul>

              <p style={paragraphStyle}>
                We ask clients not to provide sensitive or special-category Personal Data unless it is genuinely necessary for an agreed service and appropriate safeguards have been established.
              </p>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>4. How Information Is Collected</h2>
              <p style={paragraphStyle}>We collect Personal Data:</p>
              <ol style={numberedListStyle}>
                <li>directly from you;</li>
                <li>through our website and online forms;</li>
                <li>through WhatsApp Business;</li>
                <li>through email, telephone and meetings;</li>
                <li>through consultancy agreements and project documentation;</li>
                <li>through social-media platforms;</li>
                <li>automatically through cookies and tracking technologies;</li>
                <li>from clients, authorized representatives and business partners; and</li>
                <li>from lawful publicly available sources.</li>
              </ol>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>5. Technologies and Third-Party Services</h2>
              
              <h3 style={subTitleStyle}>Google Analytics</h3>
              <p style={paragraphStyle}>We may use Google Analytics to understand how visitors use our website. Depending on configuration, Google Analytics may receive information including:</p>
              <ul style={listStyle}>
                <li>IP-related information;</li>
                <li>device/browser information;</li>
                <li>page views;</li>
                <li>session information;</li>
                <li>approximate location;</li>
                <li>referral source; and</li>
                <li>website interactions.</li>
              </ul>
              <p style={paragraphStyle}>We use this information for analytics, website optimization and measurement.</p>

              <h3 style={subTitleStyle}>Meta Pixel</h3>
              <p style={paragraphStyle}>We may use Meta Pixel on our website to measure advertising performance and conversions. Depending on configuration, Meta may receive:</p>
              <ul style={listStyle}>
                <li>IP address;</li>
                <li>browser/device information;</li>
                <li>pages visited;</li>
                <li>advertising identifiers;</li>
                <li>cookie identifiers;</li>
                <li>conversion events; and</li>
                <li>interactions with advertisements or website content.</li>
              </ul>
              <p style={paragraphStyle}>Meta may process information under its own privacy terms. Where legally required, Meta Pixel and similar non-essential advertising technologies will not be activated until appropriate consent has been obtained.</p>

              <h3 style={subTitleStyle}>CRM Software</h3>
              <p style={paragraphStyle}>We may use customer relationship management ("CRM") software to manage enquiries, client details, communications, proposals, consultancy projects, sales opportunities, follow-ups, and client relationships. Our CRM provider may process Personal Data on our behalf as a data processor/service provider.</p>

              <h3 style={subTitleStyle}>WhatsApp Business</h3>
              <p style={paragraphStyle}>We use WhatsApp Business for client and prospective-client communications. Information may include telephone number, profile information, messages, documents, images, voice communications, and other information voluntarily shared through WhatsApp. WhatsApp/Meta may independently process certain information in accordance with their own terms and privacy policies. Clients should avoid transmitting highly sensitive information through WhatsApp unless necessary and appropriate.</p>

              <h3 style={subTitleStyle}>Online Forms</h3>
              <p style={paragraphStyle}>Our website may use online forms for enquiries, consultation requests, recruitment, subscriptions or other purposes. Forms may collect name, telephone number, email address, company, service required, message content, and information voluntarily supplied by the user.</p>

              <h3 style={subTitleStyle}>Cloud Storage</h3>
              <p style={paragraphStyle}>We may use cloud-based storage and collaboration systems for client documents, consultancy deliverables, contracts, project files, operational reports, internal records, and backups. Cloud providers may process or store information outside the UAE.</p>

              <h3 style={subTitleStyle}>Social Media</h3>
              <p style={paragraphStyle}>We may operate profiles or distribute content through social-media services. Where you interact with our posts, advertisements or accounts, the applicable social-media provider may collect information independently under its own privacy policy.</p>

              <h3 style={subTitleStyle}>Overseas Service Providers</h3>
              <p style={paragraphStyle}>Certain hosting, CRM, analytics, cloud, communications, advertising or technology providers may operate outside the UAE. Accordingly, Personal Data may be processed in other jurisdictions.</p>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>6. Purposes of Processing</h2>
              <p style={paragraphStyle}>We process Personal Data to:</p>
              <ul style={listStyle}>
                <li>respond to enquiries;</li>
                <li>provide consultancy services;</li>
                <li>prepare proposals and quotations;</li>
                <li>perform contracts;</li>
                <li>manage client projects;</li>
                <li>communicate with clients;</li>
                <li>issue invoices and administer payments;</li>
                <li>maintain business records;</li>
                <li>improve our website and services;</li>
                <li>analyze website usage;</li>
                <li>measure advertising performance;</li>
                <li>conduct lawful marketing;</li>
                <li>prevent fraud and misuse;</li>
                <li>maintain information security;</li>
                <li>establish or defend legal claims; and</li>
                <li>comply with applicable law.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>7. Legal Bases</h2>
              <p style={paragraphStyle}>Where GDPR or another law requiring a lawful basis applies, processing may be based upon:</p>
              <ul style={listStyle}>
                <li>consent;</li>
                <li>performance of a contract;</li>
                <li>steps taken before entering into a contract;</li>
                <li>compliance with legal obligations;</li>
                <li>legitimate interests, where permitted; or</li>
                <li>another lawful ground recognized by applicable law.</li>
              </ul>
              <p style={paragraphStyle}>Where consent is relied upon, it may be withdrawn without affecting processing lawfully undertaken before withdrawal.</p>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>8. Cookies and Advertising</h2>
              <p style={paragraphStyle}>We may use essential, functional, analytics and advertising cookies.</p>
              <p style={paragraphStyle}>Where applicable law requires consent, non-essential analytics and advertising cookies will be activated only after appropriate consent.</p>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>9. Disclosure of Personal Data</h2>
              <p style={paragraphStyle}>Personal Data may be disclosed to:</p>
              <ul style={listStyle}>
                <li>hosting providers;</li>
                <li>CRM providers;</li>
                <li>Google Analytics;</li>
                <li>Meta and related advertising technologies;</li>
                <li>cloud-storage providers;</li>
                <li>communications providers;</li>
                <li>professional advisers;</li>
                <li>accountants;</li>
                <li>contractors and consultants;</li>
                <li>payment providers;</li>
                <li>governmental/regulatory authorities where required; and</li>
                <li>prospective purchasers or successors in connection with a lawful corporate transaction.</li>
              </ul>
              <p style={paragraphStyle}>We do not sell Personal Data for monetary consideration.</p>
              <p style={paragraphStyle}>
                Certain advertising activities involving third-party tracking technologies may constitute "sharing" for cross-context behavioural advertising under the CCPA where that law applies. Where legally required, applicable opt-out mechanisms will be provided.
              </p>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>10. International Transfers</h2>
              <p style={paragraphStyle}>Personal Data may be transferred outside the country where it was collected.</p>
              <p style={paragraphStyle}>Where required, we implement appropriate safeguards, which may include:</p>
              <ul style={listStyle}>
                <li>adequacy mechanisms;</li>
                <li>contractual safeguards;</li>
                <li>Standard Contractual Clauses;</li>
                <li>data-processing agreements;</li>
                <li>transfer assessments;</li>
                <li>contractual confidentiality obligations; or</li>
                <li>another legally recognized transfer mechanism.</li>
              </ul>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>11. Data Retention</h2>
              <p style={paragraphStyle}>
                We retain Personal Data only for as long as reasonably necessary for the purposes for which it was collected and for legal, tax, accounting, contractual and dispute-resolution requirements.
              </p>
              <p style={paragraphStyle}>
                Retention periods depend on the category of information, legal requirements and nature of the client relationship.
              </p>
              <p style={paragraphStyle}>
                When Personal Data is no longer required, we will delete, anonymize or securely dispose of it where reasonably practicable and legally appropriate.
              </p>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>12. Security</h2>
              <p style={paragraphStyle}>We use reasonable technical and organizational measures designed to protect Personal Data, including where appropriate:</p>
              <ul style={listStyle}>
                <li>access controls;</li>
                <li>password protection;</li>
                <li>role-based access;</li>
                <li>secure cloud services;</li>
                <li>backup procedures;</li>
                <li>confidentiality obligations;</li>
                <li>vendor controls; and</li>
                <li>restricted access to project information.</li>
              </ul>
              <p style={paragraphStyle}>No system can guarantee absolute security.</p>
            </section>

            {/* Section 13 */}
            <section id="section-13" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>13. GDPR Rights</h2>
              <p style={paragraphStyle}>Where GDPR applies, you may have rights to:</p>
              <ul style={listStyle}>
                <li>access Personal Data;</li>
                <li>correct inaccurate data;</li>
                <li>request erasure;</li>
                <li>restrict processing;</li>
                <li>object to processing;</li>
                <li>receive portable data;</li>
                <li>withdraw consent;</li>
                <li>object to certain direct marketing; and</li>
                <li>lodge a complaint with an applicable supervisory authority.</li>
              </ul>
            </section>

            {/* Section 14 */}
            <section id="section-14" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>14. California Privacy Rights</h2>
              <p style={paragraphStyle}>Where CCPA applies, California consumers may have rights including:</p>
              <ul style={listStyle}>
                <li>the right to know;</li>
                <li>the right to access;</li>
                <li>the right to delete;</li>
                <li>the right to correct;</li>
                <li>the right to opt out of sale or sharing;</li>
                <li>the right to limit certain uses/disclosures of sensitive Personal Information; and</li>
                <li>the right not to receive discriminatory treatment for exercising applicable privacy rights.</li>
              </ul>
              <p style={paragraphStyle}>We do not knowingly sell Personal Information for monetary consideration.</p>
              <p style={paragraphStyle}>
                Where our use of advertising technologies constitutes "sharing" under the CCPA, eligible consumers may exercise applicable opt-out rights.
              </p>
              <p style={paragraphStyle}>
                We will recognize legally required opt-out preference signals, including Global Privacy Control, where applicable to our processing.
              </p>
            </section>

            {/* Section 15 */}
            <section id="section-15" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>15. UAE Privacy Rights</h2>
              <p style={paragraphStyle}>
                Individuals may exercise rights available under applicable UAE data-protection legislation (including UAE Federal Decree-Law No. 45 of 2021 concerning the Protection of Personal Data), subject to applicable statutory conditions and exceptions.
              </p>
              <p style={paragraphStyle}>Requests should be directed to our Privacy Contact.</p>
            </section>

            {/* Section 16 */}
            <section id="section-16" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>16. Direct Marketing</h2>
              <p style={paragraphStyle}>
                You may unsubscribe from marketing communications at any time by using an unsubscribe mechanism where available or contacting us.
              </p>
              <p style={paragraphStyle}>
                Service communications necessary to an active consultancy engagement are not marketing communications.
              </p>
            </section>

            {/* Section 17 */}
            <section id="section-17" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>17. Children</h2>
              <p style={paragraphStyle}>Our services are directed to businesses and adults.</p>
              <p style={paragraphStyle}>
                We do not knowingly solicit Personal Data directly from children for consultancy or marketing purposes.
              </p>
            </section>

            {/* Section 18 */}
            <section id="section-18" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>18. Automated Decision-Making</h2>
              <p style={paragraphStyle}>
                ŌDER360 does not ordinarily make decisions producing legal or similarly significant effects solely through automated processing.
              </p>
              <p style={paragraphStyle}>If this changes, we will provide disclosures required by applicable law.</p>
            </section>

            {/* Section 19 */}
            <section id="section-19" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>19. Third-Party Websites</h2>
              <p style={paragraphStyle}>
                Our website may contain links to third-party websites. We do not control their privacy practices and recommend reviewing their policies separately.
              </p>
            </section>

            {/* Section 20 */}
            <section id="section-20" className="privacy-section-card" style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>20. Changes</h2>
              <p style={paragraphStyle}>
                We may update this Privacy Policy to reflect operational, technological or legal developments.
              </p>
              <p style={paragraphStyle}>The revised policy will show an updated "Last Updated" date.</p>
            </section>

            {/* Section 21 */}
            <section id="section-21" className="privacy-section-card" style={{ ...sectionCardStyle, border: '1px solid rgba(0, 122, 255, 0.3)' }}>
              <h2 style={sectionTitleStyle}>21. Contact and Requests</h2>
              <p style={paragraphStyle}>Privacy enquiries and requests should be sent to:</p>
              <div style={infoBoxStyle}>
                <p style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '700' }}>ŌDER360</p>
                <p style={{ margin: '0 0 0.5rem 0' }}>ŌDER THREE SIXTY</p>
                <p style={{ margin: '0 0 0.5rem 0' }}>Abu Dhabi, UAE</p>
                <p style={{ margin: '0 0 0.5rem 0' }}><strong>Email:</strong> <a href="mailto:contact@oder360.com" style={{ color: '#007AFF' }}>contact@oder360.com</a></p>
                <p style={{ margin: 0 }}><strong>Telephone:</strong> <a href="tel:+971547454416" style={{ color: '#007AFF' }}>+971547454416</a></p>
              </div>
              <p style={{ ...paragraphStyle, marginTop: '1rem' }}>
                We may request reasonable information to verify identity before fulfilling a rights request.
              </p>
              <p style={{ ...paragraphStyle, color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '1.5rem', marginBottom: 0 }}>
                © {new Date().getFullYear()} ŌDER360. All Rights Reserved.
              </p>
            </section>

          </div>
        </div>

      </div>
    </div>
  )
}

const sectionCardStyle: React.CSSProperties = {
  background: 'var(--bg-card)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid var(--border-card)',
  borderRadius: '20px',
  padding: '2rem',
  boxShadow: 'var(--shadow-sm)',
  transition: 'all 0.3s ease',
}

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: '700',
  marginBottom: '1rem',
  color: 'var(--text-primary)',
  borderBottom: '1px solid var(--border-card)',
  paddingBottom: '0.5rem'
}

const subTitleStyle: React.CSSProperties = {
  fontSize: '1.15rem',
  fontWeight: '600',
  marginTop: '1.25rem',
  marginBottom: '0.75rem',
  color: 'var(--text-primary)'
}

const paragraphStyle: React.CSSProperties = {
  fontSize: '1rem',
  lineHeight: '1.7',
  color: 'var(--text-secondary)',
  marginBottom: '0.85rem'
}

const listStyle: React.CSSProperties = {
  fontSize: '0.98rem',
  lineHeight: '1.8',
  color: 'var(--text-secondary)',
  paddingLeft: '1.5rem',
  marginBottom: '1rem'
}

const numberedListStyle: React.CSSProperties = {
  fontSize: '0.98rem',
  lineHeight: '1.8',
  color: 'var(--text-secondary)',
  paddingLeft: '1.5rem',
  marginBottom: '1rem'
}

const infoBoxStyle: React.CSSProperties = {
  background: 'var(--bg-card)',
  border: '1px solid var(--border-card)',
  borderRadius: '12px',
  padding: '1.25rem',
  color: 'var(--text-primary)',
  fontSize: '0.95rem',
  lineHeight: '1.6'
}
