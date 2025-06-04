import React from 'react';
import '../styles/pages/Home.css';
import Footer from "/Users/vedantsinha/Desktop/Vain/vain-ecommerce/frontend/src/components/Footer.jsx"
import Header from "/Users/vedantsinha/Desktop/Vain/vain-ecommerce/frontend/src/components/Header.jsx"

const Home = () => {
  return (
    <>
      <Header/>

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

      <Footer/>
    </>
  );
};

export default Home;
