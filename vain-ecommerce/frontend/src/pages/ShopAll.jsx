import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import '../styles/pages/ShopAll.css';

const ShopAll = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const shopProducts = [
    {
      id: 1,
      title: 'Signature Raw Denim',
      price: '$180',
      status: 'Limited Edition',
      badge: true,
      category: 'denim',
      description: 'Premium Japanese selvedge denim with our signature fit. Crafted for those who appreciate authentic craftsmanship.'
    },
    {
      id: 2,
      title: 'Viral Oversized Hoodie',
      price: '$95',
      status: 'Trending #1',
      badge: true,
      category: 'hoodies',
      description: 'The most viral piece on social media. Oversized fit with premium cotton blend and statement graphics.'
    },
    {
      id: 3,
      title: 'Distressed Black Jeans',
      price: '$145',
      status: 'Best Seller',
      badge: true,
      category: 'denim',
      description: 'Hand-distressed black denim with meticulous attention to detail. A statement piece for the bold.'
    },
    {
      id: 4,
      title: 'Y2K Cargo Pants',
      price: '$135',
      status: 'Hot Trend',
      badge: true,
      category: 'pants',
      description: 'Nostalgic Y2K revival with modern tailoring. Multiple pockets and adjustable straps for ultimate street style.'
    },
    {
      id: 5,
      title: 'Cropped Puffer Jacket',
      price: '$180',
      status: 'Celebrity Pick',
      badge: true,
      category: 'jackets',
      description: 'Spotted on A-listers worldwide. Cropped silhouette with premium down fill and water-resistant finish.'
    },
    {
      id: 6,
      title: 'Vintage Wash Straight',
      price: '$120',
      status: 'Available Now',
      category: 'denim',
      description: 'Classic straight-leg cut with vintage wash treatment. Timeless style meets modern comfort.'
    },
    {
      id: 7,
      title: 'Platform Sneakers',
      price: '$220',
      status: 'Viral',
      category: 'shoes',
      description: 'Height and style combined. Chunky platform design with premium leather and comfort technology.'
    },
    {
      id: 8,
      title: 'Wide Leg Indigo',
      price: '$165',
      status: 'New Arrival',
      badge: true,
      category: 'denim',
      description: 'Contemporary wide-leg silhouette in deep indigo. Perfect balance of comfort and sophistication.'
    },
    {
      id: 9,
      title: 'Mesh Detail Top',
      price: '$75',
      status: 'Trending',
      category: 'tops',
      description: 'Edgy mesh paneling meets minimalist design. Perfect for layering or wearing solo.'
    },
    {
      id: 10,
      title: 'Wide Leg Trousers',
      price: '$145',
      status: 'Influencer Fave',
      badge: true,
      category: 'pants',
      description: 'The silhouette everyone is wearing. High-waisted with flowing wide legs in premium fabric.'
    },
    {
      id: 11,
      title: 'Statement Bucket Hat',
      price: '$65',
      status: 'TikTok Famous',
      category: 'accessories',
      description: 'The accessory of the moment. Bold graphics and premium materials make this a must-have.'
    },
    {
      id: 12,
      title: 'Oversized Denim Jacket',
      price: '$195',
      status: 'Limited Stock',
      badge: true,
      category: 'jackets',
      description: 'Oversized denim jacket in classic blue wash. Layer it over anything for instant cool.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: shopProducts.length },
    { id: 'denim', name: 'Denim', count: shopProducts.filter(p => p.category === 'denim').length },
    { id: 'jackets', name: 'Jackets', count: shopProducts.filter(p => p.category === 'jackets').length },
    { id: 'pants', name: 'Pants', count: shopProducts.filter(p => p.category === 'pants').length },
    { id: 'tops', name: 'Tops', count: shopProducts.filter(p => p.category === 'tops').length },
    { id: 'hoodies', name: 'Hoodies', count: shopProducts.filter(p => p.category === 'hoodies').length },
    { id: 'shoes', name: 'Shoes', count: shopProducts.filter(p => p.category === 'shoes').length },
    { id: 'accessories', name: 'Accessories', count: shopProducts.filter(p => p.category === 'accessories').length }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? shopProducts 
    : shopProducts.filter(product => product.category === selectedCategory);

  const showProductDetails = (productTitle) => {
    const product = shopProducts.find(p => p.title === productTitle);
    if (product) {
      alert(`${product.title}: ${product.description}`);
    }
  };

  return (
    <>
      <Header />
      <div className="page">
        <SectionHeader
          title="Shop All"
          subtitle="Discover our complete collection of premium streetwear and fashion essentials."
        />

        {/* Hero Section */}
        <div className="shop-hero">
          <div className="hero-content">
            <h2>Complete Collection</h2>
            <p>From timeless denim to viral streetwear, explore every piece in our curated collection.</p>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="categories-section">
          <h2>Shop by Category</h2>
          <div className="categories-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-name">{category.name}</span>
                <span className="category-count">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-section">
          <div className="products-header">
            <h2>All Products</h2>
            <p className="products-count">{filteredProducts.length} products found</p>
          </div>
          <div className="shop-grid">
            {filteredProducts.map((product) => (
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

        {/* Collection Highlights */}
        <div className="highlights-section">
          <h2>Collection Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <h3>Denim Collection</h3>
              <p>Premium Japanese selvedge and hand-distressed pieces</p>
              <span className="highlight-count">4 pieces</span>
            </div>
            <div className="highlight-card">
              <h3>Viral Streetwear</h3>
              <p>Trending pieces that are breaking the internet</p>
              <span className="highlight-count">3 pieces</span>
            </div>
            <div className="highlight-card">
              <h3>Statement Accessories</h3>
              <p>Bold accessories to complete your look</p>
              <span className="highlight-count">1 piece</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopAll;