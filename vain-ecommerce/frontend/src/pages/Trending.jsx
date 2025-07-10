import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import '../styles/pages/Trending.css';

const trendingProducts = [
  {
    id: 1,
    title: 'Viral Oversized Hoodie',
    price: '$95',
    status: 'Trending #1',
    badge: true,
    description: 'The most viral piece on social media. Oversized fit with premium cotton blend and statement graphics.'
  },
  {
    id: 2,
    title: 'Y2K Cargo Pants',
    price: '$135',
    status: 'Hot Trend',
    badge: true,
    description: 'Nostalgic Y2K revival with modern tailoring. Multiple pockets and adjustable straps for ultimate street style.'
  },
  {
    id: 3,
    title: 'Cropped Puffer Jacket',
    price: '$180',
    status: 'Celebrity Pick',
    badge: true,
    description: 'Spotted on A-listers worldwide. Cropped silhouette with premium down fill and water-resistant finish.'
  },
  {
    id: 4,
    title: 'Platform Sneakers',
    price: '$220',
    status: 'Viral',
    description: 'Height and style combined. Chunky platform design with premium leather and comfort technology.'
  },
  {
    id: 5,
    title: 'Mesh Detail Top',
    price: '$75',
    status: 'Trending',
    description: 'Edgy mesh paneling meets minimalist design. Perfect for layering or wearing solo.'
  },
  {
    id: 6,
    title: 'Wide Leg Trousers',
    price: '$145',
    status: 'Influencer Fave',
    badge: true,
    description: 'The silhouette everyone is wearing. High-waisted with flowing wide legs in premium fabric.'
  },
  {
    id: 7,
    title: 'Statement Bucket Hat',
    price: '$65',
    status: 'TikTok Famous',
    description: 'The accessory of the moment. Bold graphics and premium materials make this a must-have.'
  },
  {
    id: 8,
    title: 'Corset-Style Top',
    price: '$110',
    status: 'Red Carpet',
    badge: true,
    description: 'Structured elegance with modern appeal. Adjustable lacing and premium construction.'
  }
];

const trendingCategories = [
  {
    name: 'Viral Fashion',
    description: 'The pieces breaking the internet',
    count: '50+ styles',
    trending: 'Y2K Revival, Oversized Everything'
  },
  {
    name: 'Street Style',
    description: 'Straight from the streets to your closet',
    count: '35+ pieces',
    trending: 'Cargo Aesthetic, Platform Shoes'
  },
  {
    name: 'Celebrity Picks',
    description: 'What the stars are wearing right now',
    count: '25+ looks',
    trending: 'Cropped Cuts, Statement Accessories'
  }
];

const trendingStats = [
  { label: 'Social Mentions', value: '2.3M+', trend: '+45%' },
  { label: 'Weekly Searches', value: '180K+', trend: '+67%' },
  { label: 'Influencer Posts', value: '5.2K+', trend: '+32%' }
];

export default function Trending() {
  const showProductDetails = (productTitle) => {
    const product = trendingProducts.find(p => p.title === productTitle);
    if (product) {
      alert(`${product.title}: ${product.description}`);
    }
  };

  const exploreCategory = (categoryName) => {
    alert(`Exploring ${categoryName} - Full collection coming soon!`);
  };

  const trackTrend = () => {
    const email = prompt('Enter your email to get weekly trend alerts:');
    if (email && email.includes('@')) {
      alert('Thank you! You\'ll receive the hottest trend updates every week.');
    } else if (email) {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <>
      <Header />
      <div className="page">
        <SectionHeader
          title="Trending Now"
          subtitle="The hottest styles taking over social media and streets worldwide."
        />

        {/* Hero Section */}
        <div className="trending-hero">
          <div className="hero-content">
            <h2>What's Viral</h2>
            <p>Stay ahead of the curve with the most talked-about pieces. From TikTok sensations to red carpet moments.</p>
            <div className="trending-stats-grid">
              {trendingStats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-trend">{stat.trend}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trending Categories */}
        <div className="categories-section">
          <h2>Trending Categories</h2>
          <div className="categories-grid">
            {trendingCategories.map((category, index) => (
              <div 
                key={index} 
                className="category-card"
                onClick={() => exploreCategory(category.name)}
              >
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <div className="category-count">{category.count}</div>
                <div className="trending-items">Hot: {category.trending}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="products-section">
          <h2>Trending Products</h2>
          <div className="trending-grid">
            {trendingProducts.map((product) => (
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

        {/* Trend Alerts Section */}
        <div className="alerts-section">
          <h2>Never Miss a Trend</h2>
          <p>Get instant notifications when new trends emerge and viral pieces drop.</p>
          <div className="alerts-features">
            <div className="feature">
              <h4>Weekly Reports</h4>
              <p>Comprehensive trend analysis delivered to your inbox every week.</p>
            </div>
            <div className="feature">
              <h4>Real-Time Alerts</h4>
              <p>Be the first to know when something goes viral on social media.</p>
            </div>
            <div className="feature">
              <h4>Celebrity Updates</h4>
              <p>Track what your favorite celebrities and influencers are wearing.</p>
            </div>
          </div>
          <button className="trend-alert-btn" onClick={trackTrend}>
            Get Trend Alerts
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
