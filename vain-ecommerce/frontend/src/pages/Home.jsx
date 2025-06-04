import React from 'react';
import '../styles/pages/Home.css';

const Home = () => {
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

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h2>Denim Redefined</h2>
          <p>Timeless denim. Modern attitude. Discover Vain's latest drop.</p>
          <a href="/collection" className="btn">
            <div className="btn-background"></div>
            <span className="btn-text-visible">Shop Now</span>
            <span className="btn-text-hidden">The Collection</span>
          </a>
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

export default Home;
