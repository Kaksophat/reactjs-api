// Footer.jsx
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, CreditCard, Truck, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Features Section */}
        <div className="features-section">
          <div className="feature-item">
            <Truck className="feature-icon" />
            <div className="feature-content">
              <h3>Free Shipping</h3>
              <p>On orders over $100</p>
            </div>
          </div>
          <div className="feature-item">
            <CreditCard className="feature-icon" />
            <div className="feature-content">
              <h3>Secure Payments</h3>
              <p>100% secure checkout</p>
            </div>
          </div>
          <div className="feature-item">
            <Clock className="feature-icon" />
            <div className="feature-content">
              <h3>24/7 Support</h3>
              <p>Available round the clock</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-content">
          <div className="footer-column">
            <h2>Shop</h2>
            <p>Your one-stop destination for all your shopping needs. Quality products at the best prices.</p>
            <div className="social-icons">
              <Facebook className="social-icon" />
              <Twitter className="social-icon" />
              <Instagram className="social-icon" />
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Special Offers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li>
                <MapPin className="contact-icon" />
                <span>123 Shopping Street, NY 10001</span>
              </li>
              <li>
                <Phone className="contact-icon" />
                <span>+1 234 567 8900</span>
              </li>
              <li>
                <Mail className="contact-icon" />
                <span>support@shopname.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2024 Shop Name. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;