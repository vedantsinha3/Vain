import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/components/footer.css';
import '../styles/pages/Home.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <Link to="/about">About Us</Link>
          <Link to="/shop-all">Shop</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/contact">Contact</Link>
        </div>
        {/* ... rest of your footer content ... */}
      </div>
    </footer>
  );
};

export default Footer;