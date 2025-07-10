import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
          <Link to="/shop-all" className="btn">
            <div className="btn-background"></div>
            <span className="btn-text-visible">Shop Now</span>
            <span className="btn-text-hidden">The Collection</span>
          </Link>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default Home;
