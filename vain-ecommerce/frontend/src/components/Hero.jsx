import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <nav className="hero-nav">
          <Link to="/">HOME</Link>
          <Link to="/trending">TRENDING</Link>
          <Link to="/new-releases">NEW RELEASES</Link>
          <Link to="/shop-all">SHOP ALL</Link>
        </nav>
        
        <div className="hero-text">
          <h1>DENIM REDEFINED</h1>
          <p>Timeless denim. Modern attitude. Discover Vain's latest drop.</p>
          <Link to="/shop-all" className="hero-btn">
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;