import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/vedantsinha/Desktop/Vain/vain-ecommerce/frontend/src/styles/components/footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <a href="/about-us">About Us</a>
            <a href="/shop-all">Shop</a>
            <a href="/collection">Collections</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-section support">
            <h3>Customer Support</h3>
            <a href="/faq">FAQs</a>
            <a href="/shipping">Shipping & Returns</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>
          <div className="footer-section newsletter">
            <h3>Join Our Exclusive List</h3>
            <p>Subscribe for early access, new arrivals, and VIP offers.</p>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Vain. All rights reserved.</p>
          <div className="social-media">
            <a href="https://instagram.com">Instagram</a>
            <a href="https://facebook.com">Facebook</a>
            <a href="https://twitter.com">Twitter</a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;