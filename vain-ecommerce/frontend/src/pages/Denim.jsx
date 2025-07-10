import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import '../styles/pages/Denim.css';

const denimProducts = [
  {
    id: 1,
    title: 'Signature Raw Denim',
    price: '$180',
    status: 'Limited Edition',
    badge: true,
    description: 'Premium Japanese selvedge denim with our signature fit. Crafted for those who appreciate authentic craftsmanship.'
  },
  {
    id: 2,
    title: 'Distressed Black Jeans',
    price: '$145',
    status: 'Best Seller',
    badge: true,
    description: 'Hand-distressed black denim with meticulous attention to detail. A statement piece for the bold.'
  },
  {
    id: 3,
    title: 'Vintage Wash Straight',
    price: '$120',
    status: 'Available Now',
    description: 'Classic straight-leg cut with vintage wash treatment. Timeless style meets modern comfort.'
  },
  {
    id: 4,
    title: 'Wide Leg Indigo',
    price: '$165',
    status: 'New Arrival',
    badge: true,
    description: 'Contemporary wide-leg silhouette in deep indigo. Perfect balance of comfort and sophistication.'
  },
  {
    id: 5,
    title: 'Cropped Flare Denim',
    price: '$135',
    status: 'Trending',
    description: 'Modern cropped flare with premium stretch denim. Statement legs for the fashion-forward.'
  },
  {
    id: 6,
    title: 'Oversized Denim Jacket',
    price: '$195',
    status: 'Limited Stock',
    badge: true,
    description: 'Oversized denim jacket in classic blue wash. Layer it over anything for instant cool.'
  }
];

const denimCollections = [
  {
    name: 'Heritage Collection',
    description: 'Classic cuts with timeless appeal',
    featured: 'Signature Raw Denim'
  },
  {
    name: 'Urban Edge',
    description: 'Contemporary styles for city living',
    featured: 'Distressed Black Jeans'
  },
  {
    name: 'Future Denim',
    description: 'Innovative cuts and treatments',
    featured: 'Wide Leg Indigo'
  }
];

export default function Denim() {
  const showProductDetails = (productTitle) => {
    const product = denimProducts.find(p => p.title === productTitle);
    if (product) {
      alert(`${product.title}: ${product.description}`);
    }
  };

  const exploreCollection = (collectionName) => {
    alert(`Exploring ${collectionName} - Coming soon with full collection view!`);
  };

  return (
    <>
      <Header />
      <div className="page">
        <SectionHeader
          title="Denim Collection"
          subtitle="Where heritage meets innovation. Discover our premium denim crafted for the modern rebel."
        />

        {/* Hero Section */}
        <div className="denim-hero">
          <div className="hero-content">
            <h2>Redefining Denim</h2>
            <p>From raw selvedge to perfectly distressed pieces, each garment tells a story of craftsmanship and rebellion.</p>
          </div>
        </div>

        {/* Collections Preview */}
        <div className="collections-section">
          <h2>Our Collections</h2>
          <div className="collections-grid">
            {denimCollections.map((collection, index) => (
              <div 
                key={index} 
                className="collection-card"
                onClick={() => exploreCollection(collection.name)}
              >
                <h3>{collection.name}</h3>
                <p>{collection.description}</p>
                <div className="featured-item">Featured: {collection.featured}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-section">
          <h2>All Denim Pieces</h2>
          <div className="denim-grid">
            {denimProducts.map((product) => (
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

        {/* Denim Care Section */}
        <div className="care-section">
          <h2>Denim Care Guide</h2>
          <p>Proper care ensures your denim ages beautifully and lasts for years.</p>
          <div className="care-tips">
            <div className="care-tip">
              <h4>First Wear</h4>
              <p>Raw denim should be worn for at least 6 months before first wash for optimal fading.</p>
            </div>
            <div className="care-tip">
              <h4>Washing</h4>
              <p>Turn inside out, cold water, gentle cycle. Air dry to prevent shrinkage.</p>
            </div>
            <div className="care-tip">
              <h4>Storage</h4>
              <p>Hang or fold properly to maintain shape and prevent unwanted creasing.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}