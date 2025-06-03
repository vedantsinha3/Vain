import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import ProductCard from '../components/ProductCard';
import '../styles/pages/shopAll.css';

const ShopAll = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <section className="shopall-intro">
        <h1>Shop All Products</h1>
        <p>Browse our complete collection of clothing and accessories.</p>
      </section>
      
      <main>
        <section className="shopall-products">
          {loading ? (
            <p>Loading products...</p>
          ) : (
            <div className="products-grid">
              {products.map(product => (
                <ProductCard key={product.product_id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ShopAll;