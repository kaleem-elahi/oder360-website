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
              <div className="profile-info">
                <h3>Abdul Rasheed</h3>
                <p className="profile-role">Founder & CEO</p>
                <div className="profile-credentials">
                  <span className="credential">Bachelor of Arts in Hotel Management</span>
                  <span className="credential">12 Years Restaurant Operations Experience</span>
                  <span className="credential">Multi-Concept F&B Specialist</span>
                </div>
                <div className="profile-location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Abu Dhabi, UAE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

