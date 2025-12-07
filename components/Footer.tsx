import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link href="/" className="footer-logo-link">
              <Image
                src="/images/assets/brand/logo.png"
                alt="O'der360 Logo"
                width={180}
                height={60}
                className="footer-logo-image"
              />
            </Link>
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


