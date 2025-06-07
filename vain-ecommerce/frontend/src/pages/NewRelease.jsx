import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/NewRelease.css'; // Create this and paste your CSS
import ProductCard from '/Users/vedantsinha/Desktop/Vain/vain-ecommerce/frontend/src/components/ProductCard.jsx'

const products = [
  { title: 'Oversized Hoodie', price: '$85', status: 'Available Now', badge: true },
  { title: 'Cargo Pants', price: '$120', status: 'Pre-Order' },
  { title: 'Vintage Tee', price: '$45', status: 'Available Now', badge: true },
  { title: 'Leather Jacket', price: '$250', status: 'Coming Soon' },
  { title: 'Wide Leg Jeans', price: '$95', status: 'Available Now' },
  { title: 'Bomber Jacket', price: '$180', status: 'Limited Edition', badge: true },
];

const descriptions = {
  'Oversized Hoodie': 'Premium cotton blend oversized hoodie with embroidered logo details.',
  'Cargo Pants': 'Tactical-inspired cargo pants with multiple pockets and adjustable waist.',
  'Vintage Tee': 'Soft vintage-wash cotton tee with retro graphics and relaxed fit.',
  'Leather Jacket': 'Genuine leather moto jacket with premium hardware and quilted details.',
  'Wide Leg Jeans': 'High-waisted wide leg jeans in premium Japanese denim.',
};

export default function NewRelease() {
  const showDetails = (productName) => {
    alert(`${productName}: ${descriptions[productName] || 'More details coming soon!'}`);
  };

  const notifyMe = () => {
    const email = prompt('Enter your email to receive notifications about new releases:');
    if (email && email.includes('@')) {
      alert('Thank you! You\'ll be notified about our upcoming releases.');
    } else if (email) {
      alert('Please enter a valid email address.');
    }
  };

  const subscribe = () => {
    const email = document.getElementById('emailInput').value;
    if (email && email.includes('@')) {
      alert('Thank you for subscribing!');
      document.getElementById('emailInput').value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <>
      <Header />
      <div className="page">
        <div className="hero-section">
          <h1 className="hero-title">New Releases</h1>
          <div className="hero-underline"></div>
          <p className="hero-subtitle">Discover the latest styles that everyone is talking about.</p>
        </div>

        <div className="release-grid">
        {products.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            price={product.price}
            status={product.status}
            badge={product.badge}
            onClick={() => showDetails(product.title)}
          />
        ))}
        </div>

        <div className="coming-soon-section">
          <h2>More Drops Coming Soon</h2>
          <p>Stay ahead of the curve. Be the first to know about our upcoming releases and exclusive drops.</p>
          <button className="notify-btn" onClick={notifyMe}>Notify Me</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
