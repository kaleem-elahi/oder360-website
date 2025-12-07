import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>
              O'der<span className="logo-accent">360</span>
            </h3>
            <p>Transforming F&B operations into excellence across the UAE and beyond.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link href="#services">Staff Management</Link>
                </li>
                <li>
                  <Link href="#services">Financial Management</Link>
                </li>
                <li>
                  <Link href="#services">Menu Engineering</Link>
                </li>
                <li>
                  <Link href="#services">Pre-Opening Operations</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link href="#about">About Us</Link>
                </li>
                <li>
                  <Link href="#portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} O'der360. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


