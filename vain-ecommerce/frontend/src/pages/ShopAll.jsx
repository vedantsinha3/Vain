import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import '../styles/components/SectionHeader.css';

const ShopAll = () => {
  const fakeProducts = [
    {
      product_id: 1,
      name: 'Vintage Denim Jacket',
      price: 120.00,
      is_active: true,
      imageUrl: '/hero.png', // Placeholder image
      badge: 'NEW',
      subtitle: 'SHOP ALL'
    },
    {
      product_id: 2,
      name: 'Distressed Jeans',
      price: 80.00,
      is_active: true,
      imageUrl: '/hero copy.png', // Placeholder image
      subtitle: 'SHOP ALL'
    },
    {
      product_id: 3,
      name: 'Leather Bomber Jacket',
      price: 200.00,
      is_active: true,
      imageUrl: '/logo.png', // Placeholder image
      badge: 'NEW',
      subtitle: 'SHOP ALL'
    },
    {
      product_id: 4,
      name: 'Oversized T-Shirt',
      price: 45.00,
      is_active: true,
      imageUrl: '/logo-black.png', // Placeholder image
      subtitle: 'SHOP ALL'
    }
  ];

  return (
    <>
      <Header />
      <SectionHeader
        title="Shop All Products"
        subtitle="Browse our complete collection of clothing and accessories."
      />
      
      <main>
        <section className="shopall-products">
          <div className="products-grid">
            {fakeProducts.map(product => (
              <ProductCard
                key={product.product_id}
                title={product.name}
                price={`$${product.price}`}
                status={product.is_active ? 'Available' : 'Unavailable'}
                imageUrl={product.imageUrl}
                badge={product.badge}
                subtitle={product.subtitle}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ShopAll;