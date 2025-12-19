import Image from 'next/image'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text fade-in-left">
            <h2 className="section-title">About O'der360</h2>
            <p className="about-description">
              O'der360 is a leading F&B operations consultancy founded by <strong>Abdul Rasheed</strong>,
              an experienced Restaurant professional with 12 years of significant experience in Restaurant Operations.
              Extensive knowledge in leading and managing operations and cost control across the UAE and Oman.
            </p>
            <p className="about-description">
              Throughout my journey, I have worked on several Restaurant Openings, renovation projects, and staffing restructuring,
              developing and maintaining full operation concerning Pre-Opening Multi-store management, brand-new concept development,
              brand design, kitchen layout and design, interior design conceptualization, menu development, hiring, training, P&L analysis,
              and support, monitoring financial performance, assist finance manager in review and preparation of budgets, finding new
              locations and negotiate with landlords, Set up the appropriate supply chains for the fresh ingredients and assets.
            </p>
            <p className="about-description">
              <strong>Cooking is one of my passion.</strong> The recipes I make are incredible, and they reflect my personal tastes.
              I have worked with different types of F&B Industry: Out Door Catering, Italian Restaurants, Buffet Restaurant,
              Fine Dining Restaurant, Latino Bar, Sports Recreational Bar, Asian Foods, All Day Dining, and Burger and Pizza
              are my favorite QSR Concepts.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">✓</div>
                <div className="highlight-text">
                  <strong>Proven Results:</strong> Consistent history of increasing profitability up to 21% and
                  reducing operational costs by 15%
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">✓</div>
                <div className="highlight-text">
                  <strong>Multi-Concept Expertise:</strong> Successfully managed 15+ brands across various F&B segments
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">✓</div>
                <div className="highlight-text">
                  <strong>Franchise Development:</strong> Expert in international brand expansion and market adaptation
                  for the UAE market
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual fade-in-right">
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-image-wrapper">
                  <div className="profile-image-gradient"></div>
                  <div className="profile-image">
                    <Image
                      src="/images/assets/brand/owner.png"
                      alt="Abdul Rasheed - Founder & CEO"
                      width={200}
                      height={200}
                      className="profile-photo"
                      priority
                    />
                  </div>
                </div>
                <div className="profile-title">
                  <h3>Abdul Rasheed</h3>
                  <p className="profile-role">Founder & CEO</p>
                </div>
              </div>

              <div className="profile-body">
                <div className="profile-credentials">
                  <div className="credential-tag">
                    <span className="credential-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                    </span>
                    <span>Bachelor of Arts in Hotel Management</span>
                  </div>
                  <div className="credential-tag">
                    <span className="credential-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </span>
                    <span>12 Years Restaurant Operations Experience</span>
                  </div>
                  <div className="credential-tag">
                    <span className="credential-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </span>
                    <span>Multi-Concept F&B Specialist</span>
                  </div>
                </div>

                <div className="profile-location">
                  <div className="location-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span>Abu Dhabi, UAE</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="card-decoration top-right"></div>
              <div className="card-decoration bottom-left"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

