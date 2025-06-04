import React from 'react';
import '../styles/pages/About.css';

const About = () => {
  return (
    <>
      {/* Header */}
      <header className="site-header">
        <a href="/">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
        </a>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/trending">Trending</a></li>
            <li><a href="/new-releases">New Releases</a></li>
            <li><a href="/shop-all">Shop All</a></li>
            <li><a href="/denim">Denim</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className= 'about'>
      <div className='about-container'>
        <div className='about-text'>
          <h2>About Vain</h2>
          <p>
            Vain is a contemporary fashion brand that blends modern aesthetics
            with timeless elegance. Our mission is to empower individuals to
            express their unique style through our carefully curated collections.
          </p>

          <div className= 'about-values'>
            <div className= 'value-item'>
              <h3>Sustainability</h3>
              <p>Committed to ethical fashion and environmental responsibility.</p>
            </div>
            <div className='value-item'>
              <h3>Quality</h3>
              <p>Uncompromising attention to detail and craftsmanship.</p>
            </div>
            <div className='value-item'>
              <h3>Innovation</h3>
              <p>Pushing boundaries in design and fashion technology.</p>
            </div>
            <div className='value-item'>
              <h3>Inclusivity</h3>
              <p>Creating fashion that celebrates individuality.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Footer */}
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
    </>
  );
};

export default About;
