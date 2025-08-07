import React from 'react';
import '../styles/pages/About.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  const values = [
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Committed to ethical fashion and environmental responsibility. Every piece is crafted with conscious materials and sustainable practices.'
    },
    {
      icon: '⚡',
      title: 'Quality',
      description: 'Uncompromising attention to detail and craftsmanship. Our pieces are built to last, combining premium materials with expert construction.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Pushing boundaries in design and fashion technology. We constantly explore new possibilities to redefine modern style.'
    },
    {
      icon: '✨',
      title: 'Inclusivity',
      description: 'Creating fashion that celebrates individuality. Our designs embrace diverse styles and empower personal expression.'
    }
  ];

  const stats = [
    { number: '2019', label: 'Founded' },
    { number: '10K+', label: 'Happy Customers' },
    { number: '50+', label: 'Countries Served' },
    { number: '100%', label: 'Sustainable' }
  ];

  return (
    <>
      <Header />
      <div className="page">
        <SectionHeader
          title="About Vain"
          subtitle="A contemporary fashion brand that blends modern aesthetics with timeless elegance, empowering individuals to express their unique style."
        />

        {/* Brand Story Section */}
        <div className="about-story">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Born from a vision to redefine contemporary fashion, Vain emerged in 2019 with a simple yet powerful mission: 
              to create clothing that speaks to the modern individual's desire for both style and substance.
            </p>
            <p>
              We believe fashion should be more than just clothing—it should be a form of self-expression, 
              a statement of values, and a reflection of who you are. Every piece in our collection is designed 
              with this philosophy in mind, combining cutting-edge design with timeless appeal.
            </p>
            <div className="story-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="about-values">
          <h2>What Drives Us</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="about-mission">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <div className="mission-grid">
              <div className="mission-text">
                <p>
                  To democratize high-quality fashion by making contemporary, sustainable, and inclusive 
                  clothing accessible to everyone. We're not just creating clothes—we're building a 
                  community of individuals who value authenticity, quality, and conscious consumption.
                </p>
                <p>
                  Through our carefully curated collections, we aim to inspire confidence, celebrate 
                  diversity, and push the boundaries of what fashion can be in the modern world.
                </p>
              </div>
              <div className="mission-highlights">
                <div className="highlight-item">
                  <h4>Sustainable Practices</h4>
                  <p>100% eco-friendly materials and ethical production processes</p>
                </div>
                <div className="highlight-item">
                  <h4>Global Community</h4>
                  <p>Serving customers in over 50 countries worldwide</p>
                </div>
                <div className="highlight-item">
                  <h4>Innovation First</h4>
                  <p>Constantly pushing boundaries in design and technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
