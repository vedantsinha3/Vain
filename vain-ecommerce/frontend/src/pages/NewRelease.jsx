import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import '../styles/pages/NewRelease.css';

const NewRelease = () => {
  const [email, setEmail] = useState('');

  const newProducts = [
    {
      id: 1,
      title: 'Signature Raw Denim',
      price: '$180',
      status: 'Just Dropped',
      badge: true,
      description: 'Premium Japanese selvedge denim with our signature fit. Crafted for those who appreciate authentic craftsmanship.',
      releaseDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Viral Oversized Hoodie',
      price: '$95',
      status: 'Trending #1',
      badge: true,
      description: 'The most viral piece on social media. Oversized fit with premium cotton blend and statement graphics.',
      releaseDate: '2024-01-12'
    },
    {
      id: 3,
      title: 'Y2K Cargo Pants',
      price: '$135',
      status: 'Hot Trend',
      badge: true,
      description: 'Nostalgic Y2K revival with modern tailoring. Multiple pockets and adjustable straps for ultimate street style.',
      releaseDate: '2024-01-10'
    },
    {
      id: 4,
      title: 'Cropped Puffer Jacket',
      price: '$180',
      status: 'Celebrity Pick',
      badge: true,
      description: 'Spotted on A-listers worldwide. Cropped silhouette with premium down fill and water-resistant finish.',
      releaseDate: '2024-01-08'
    },
    {
      id: 5,
      title: 'Platform Sneakers',
      price: '$220',
      status: 'Viral',
      description: 'Height and style combined. Chunky platform design with premium leather and comfort technology.',
      releaseDate: '2024-01-05'
    },
    {
      id: 6,
      title: 'Wide Leg Trousers',
      price: '$145',
      status: 'Influencer Fave',
      badge: true,
      description: 'The silhouette everyone is wearing. High-waisted with flowing wide legs in premium fabric.',
      releaseDate: '2024-01-03'
    }
  ];

  const upcomingReleases = [
    {
      id: 1,
      title: 'Limited Edition Denim Jacket',
      expectedDate: '2024-02-01',
      status: 'Pre-Order Available',
      description: 'Hand-distressed vintage denim jacket with premium hardware.'
    },
    {
      id: 2,
      title: 'Statement Accessories Collection',
      expectedDate: '2024-02-15',
      status: 'Coming Soon',
      description: 'Bold accessories to complete your look and make a statement.'
    },
    {
      id: 3,
      title: 'Spring Streetwear Capsule',
      expectedDate: '2024-03-01',
      status: 'Notify Me',
      description: 'Fresh spring colors and lightweight fabrics for the new season.'
    }
  ];

  const releaseStats = [
    { label: 'New This Month', value: '6+', trend: '+40%' },
    { label: 'Pre-Orders', value: '150+', trend: '+25%' },
    { label: 'Waitlist Signups', value: '2.3K+', trend: '+60%' }
  ];

  const showProductDetails = (productTitle) => {
    const product = newProducts.find(p => p.title === productTitle);
    if (product) {
      alert(`${product.title}: ${product.description}\n\nRelease Date: ${product.releaseDate}`);
    }
  };

  const notifyMe = () => {
    const emailInput = prompt('Enter your email to receive notifications about new releases:');
    if (emailInput && emailInput.includes('@')) {
      alert('Thank you! You\'ll be notified about our upcoming releases.');
    } else if (emailInput) {
      alert('Please enter a valid email address.');
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      alert('Thank you for subscribing! You\'ll be the first to know about new drops.');
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <>
      <Header />
      <div className="page">
        <SectionHeader
          title="New Releases"
          subtitle="The latest drops that are taking over social media and streets worldwide."
        />

        {/* Hero Section */}
        <div className="release-hero">
          <div className="hero-content">
            <h2>Fresh Drops</h2>
            <p>Be the first to get your hands on our latest releases. From viral streetwear to timeless classics.</p>
            <div className="release-stats-grid">
              {releaseStats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-trend">{stat.trend}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest Releases */}
        <div className="latest-releases">
          <h2>Latest Releases</h2>
          <div className="release-grid">
            {newProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                status={product.status}
                badge={product.badge}
                onClick={() => showProductDetails(product.title)}
              />
            ))}
          </div>
        </div>

        {/* Upcoming Releases */}
        <div className="upcoming-section">
          <h2>Coming Soon</h2>
          <div className="upcoming-grid">
            {upcomingReleases.map((release) => (
              <div key={release.id} className="upcoming-card">
                <h3>{release.title}</h3>
                <p>{release.description}</p>
                <div className="release-meta">
                  <span className="release-date">Expected: {release.expectedDate}</span>
                  <span className="release-status">{release.status}</span>
                </div>
                <button className="notify-btn" onClick={notifyMe}>
                  {release.status === 'Pre-Order Available' ? 'Pre-Order' : 'Notify Me'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <h2>Never Miss a Drop</h2>
          <p>Get exclusive early access and be the first to know about new releases, restocks, and limited editions.</p>
          <form onSubmit={handleEmailSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
              required
            />
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
          </form>
          <div className="newsletter-features">
            <div className="feature">
              <h4>Early Access</h4>
              <p>Shop new releases 24 hours before public release</p>
            </div>
            <div className="feature">
              <h4>Exclusive Drops</h4>
              <p>Access to limited edition pieces and collaborations</p>
            </div>
            <div className="feature">
              <h4>Restock Alerts</h4>
              <p>Instant notifications when sold-out items return</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewRelease;
