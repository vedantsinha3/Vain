import React from 'react';
import '../styles/pages/About.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      {/* Header */}
      <Header/>

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
      <Footer/>
    </>
  );
};

export default About;
