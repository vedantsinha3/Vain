import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import '../styles/pages/Collections.css';

const Collections = () => {
  const [selectedCollection, setSelectedCollection] = useState('all');

  const collections = [
    {
      id: 'signature',
      name: 'Signature Collection',
      description: 'Our flagship pieces that define the VAIN aesthetic',
      image: '/collection-signature.jpg',
      itemCount: 12,
      featured: true,
      theme: 'Timeless elegance meets modern rebellion'
    },
    {
      id: 'streetwear',
      name: 'Urban Streetwear',
      description: 'Bold street-inspired pieces for the modern rebel',
      image: '/collection-streetwear.jpg',
      itemCount: 18,
      featured: true,
      theme: 'Raw authenticity with urban edge'
    },
    {
      id: 'denim',
      name: 'Denim Archive',
      description: 'Premium denim crafted with Japanese selvedge',
      image: '/collection-denim.jpg',
      itemCount: 8,
      featured: false,
      theme: 'Heritage craftsmanship'
    },
    {
      id: 'minimalist',
      name: 'Minimalist Essentials',
      description: 'Clean lines and perfect fits for everyday luxury',
      image: '/collection-minimal.jpg',
      itemCount: 15,
      featured: false,
      theme: 'Less is more philosophy'
    },
    {
      id: 'avant-garde',
      name: 'Avant-Garde',
      description: 'Experimental designs pushing fashion boundaries',
      image: '/collection-avant.jpg',
      itemCount: 6,
      featured: true,
      theme: 'Future of fashion'
    },
    {
      id: 'accessories',
      name: 'Statement Accessories',
      description: 'Bold accessories to complete your look',
      image: '/collection-accessories.jpg',
      itemCount: 22,
      featured: false,
      theme: 'Details make the difference'
    }
  ];

  // Sample products for each collection
  const collectionProducts = {
    signature: [
      { id: 1, title: 'Signature Blazer', price: '$295', status: 'Flagship', badge: true },
      { id: 2, title: 'Classic Trench', price: '$425', status: 'Timeless', badge: false },
      { id: 3, title: 'Silk Midi Dress', price: '$245', status: 'Elegant', badge: true },
      { id: 4, title: 'Tailored Pants', price: '$185', status: 'Essential', badge: false }
    ],
    streetwear: [
      { id: 5, title: 'Viral Oversized Hoodie', price: '$95', status: 'Trending #1', badge: true },
      { id: 6, title: 'Graphic Tee Collection', price: '$65', status: 'Hot', badge: true },
      { id: 7, title: 'Cargo Joggers', price: '$135', status: 'Street Style', badge: false },
      { id: 8, title: 'Bucket Hat', price: '$55', status: 'TikTok Famous', badge: true }
    ],
    denim: [
      { id: 9, title: 'Signature Raw Denim', price: '$180', status: 'Limited Edition', badge: true },
      { id: 10, title: 'Distressed Black Jeans', price: '$145', status: 'Best Seller', badge: true },
      { id: 11, title: 'Wide Leg Indigo', price: '$165', status: 'New Arrival', badge: false },
      { id: 12, title: 'Vintage Wash Straight', price: '$120', status: 'Available Now', badge: false }
    ],
    minimalist: [
      { id: 13, title: 'Perfect White Tee', price: '$45', status: 'Essential', badge: false },
      { id: 14, title: 'Cashmere Sweater', price: '$195', status: 'Luxury', badge: true },
      { id: 15, title: 'Tailored Blazer', price: '$275', status: 'Professional', badge: false },
      { id: 16, title: 'Silk Camisole', price: '$85', status: 'Refined', badge: false }
    ],
    'avant-garde': [
      { id: 17, title: 'Deconstructed Jacket', price: '$385', status: 'Experimental', badge: true },
      { id: 18, title: 'Asymmetric Dress', price: '$265', status: 'Artistic', badge: true },
      { id: 19, title: 'Sculptural Top', price: '$225', status: 'Avant-Garde', badge: false },
      { id: 20, title: 'Geometric Pants', price: '$295', status: 'Futuristic', badge: true }
    ],
    accessories: [
      { id: 21, title: 'Statement Belt', price: '$125', status: 'Bold', badge: false },
      { id: 22, title: 'Designer Sunglasses', price: '$195', status: 'Trendy', badge: true },
      { id: 23, title: 'Leather Handbag', price: '$345', status: 'Luxury', badge: false },
      { id: 24, title: 'Chunky Chain Necklace', price: '$85', status: 'Statement', badge: true }
    ]
  };

  const getFilteredProducts = () => {
    if (selectedCollection === 'all') {
      return Object.values(collectionProducts).flat();
    }
    return collectionProducts[selectedCollection] || [];
  };

  const getFeaturedCollections = () => {
    return collections.filter(collection => collection.featured);
  };

  const handleCollectionSelect = (collectionId) => {
    setSelectedCollection(collectionId);
  };

  const showProductDetails = (productTitle) => {
    alert(`Product: ${productTitle}\nExplore this item in detail!`);
  };

  return (
    <>
      <Header />
      <div className="page">
        <SectionHeader
          title="Collections"
          subtitle="Discover our curated collections, each telling a unique story of style, craftsmanship, and innovation."
        />

        {/* Hero Section */}
        <div className="collections-hero">
          <div className="hero-content">
            <h2>Curated with Purpose</h2>
            <p>Each collection represents a chapter in our design philosophy, from timeless classics to boundary-pushing experimental pieces.</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">{collections.length}</span>
                <span className="stat-label">Collections</span>
              </div>
              <div className="stat">
                <span className="stat-number">{Object.values(collectionProducts).flat().length}</span>
                <span className="stat-label">Unique Pieces</span>
              </div>
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Featured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Collections */}
        <div className="featured-collections">
          <h2>Featured Collections</h2>
          <div className="featured-grid">
            {getFeaturedCollections().map((collection) => (
              <div 
                key={collection.id} 
                className="featured-collection-card"
                onClick={() => handleCollectionSelect(collection.id)}
              >
                <div className="collection-image">
                  <div className="collection-overlay">
                    <h3>{collection.name}</h3>
                    <p>{collection.theme}</p>
                    <div className="collection-meta">
                      <span className="item-count">{collection.itemCount} items</span>
                    </div>
                  </div>
                </div>
                <div className="collection-info">
                  <h4>{collection.name}</h4>
                  <p>{collection.description}</p>
                  <Button className="explore-btn">
                    Explore Collection
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Collections Grid */}
        <div className="all-collections">
          <h2>All Collections</h2>
          <div className="collection-filters">
            <button
              className={`filter-btn ${selectedCollection === 'all' ? 'active' : ''}`}
              onClick={() => handleCollectionSelect('all')}
            >
              All Collections ({Object.values(collectionProducts).flat().length})
            </button>
            {collections.map((collection) => (
              <button
                key={collection.id}
                className={`filter-btn ${selectedCollection === collection.id ? 'active' : ''}`}
                onClick={() => handleCollectionSelect(collection.id)}
              >
                {collection.name} ({collection.itemCount})
              </button>
            ))}
          </div>

          <div className="collections-grid">
            {collections.map((collection) => (
              <div 
                key={collection.id} 
                className={`collection-card ${selectedCollection === collection.id || selectedCollection === 'all' ? 'visible' : 'hidden'}`}
                onClick={() => handleCollectionSelect(collection.id)}
              >
                <div className="card-image">
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <h3>{collection.name}</h3>
                      <p>{collection.theme}</p>
                      <span className="item-count">{collection.itemCount} pieces</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h4>{collection.name}</h4>
                  <p>{collection.description}</p>
                  <div className="card-meta">
                    <span className="piece-count">{collection.itemCount} pieces</span>
                    {collection.featured && <span className="featured-badge">Featured</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Products from Selected Collection */}
        {selectedCollection !== 'all' && (
          <div className="collection-products">
            <h2>{collections.find(c => c.id === selectedCollection)?.name} Products</h2>
            <div className="products-grid">
              {getFilteredProducts().map((product) => (
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
        )}

        {/* Collection Philosophy */}
        <div className="collection-philosophy">
          <div className="philosophy-content">
            <h2>Our Collection Philosophy</h2>
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <div className="philosophy-icon">🎨</div>
                <h3>Curated Design</h3>
                <p>Every piece is thoughtfully selected and designed to represent our commitment to quality and innovation.</p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">✨</div>
                <h3>Quality Craftsmanship</h3>
                <p>We partner with skilled artisans and use premium materials to ensure each item meets our exacting standards.</p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">🌟</div>
                <h3>Timeless Appeal</h3>
                <p>Our collections balance contemporary trends with timeless design principles for lasting style.</p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">🔮</div>
                <h3>Future Forward</h3>
                <p>We constantly push boundaries and explore new possibilities in fashion and design.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Be the first to know when we launch new collections and exclusive pieces.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" className="newsletter-input" />
              <Button className="newsletter-btn">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Collections;