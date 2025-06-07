import React from 'react';
import Header from '/Users/vedantsinha/Desktop/Vain/vain-ecommerce/frontend/src/components/Header.jsx';
import Footer from '/Users/vedantsinha/Desktop/Vain/vain-ecommerce/frontend/src/components/Footer.jsx';
import '/Users/vedantsinha/Desktop/Vain/vain-ecommerce/frontend/src/styles/pages/Trending.css';
import ProductCard from '../components/ProductCard';

const sampleProducts = [
  {
    id: 1,
    name: 'Vintage Denim Jacket',
    imageUrl: '/images/trending1.jpg',
    price: '$120',
  },
  {
    id: 2,
    name: 'Distressed Jeans',
    imageUrl: '/images/trending2.jpg',
    price: '$80',
  },
  {
    id: 3,
    name: 'Leather Bomber Jacket',
    imageUrl: '/images/trending3.jpg',
    price: '$200',
  },
  {
    id: 4,
    name: 'Oversized T-Shirt',
    imageUrl: '/images/trending4.jpg',
    price: '$45',
  },
  // …add more products as needed
];

export default function Trending() {
  return (
    <div>
      <Header />

      {/* Push content down if Header is fixed (adjust --header-height in globals) */}
      <main style={{ paddingTop: 'var(--header-height)' }}>
        {/* Intro Section */}
        <section className="trending-intro">
          <h1>Trending</h1>
          <p>Discover the latest styles that everyone is talking about.</p>
        </section>

        {/* Product Gallery */}
        <div className="trending-products">
        <div className="gallery">
          {sampleProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </main>

      {/* Site footer */}
      <Footer />
    </div>
  );
}
