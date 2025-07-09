import React from 'react';
import '/Users/vedantsinha/Desktop/Vain/vain-ecommerce/frontend/src/styles/components/productCard.css'; // Create CSS for this if needed

const ProductCard = ({ title, price, status, badge, onClick, imageUrl, subtitle }) => {
  return (
    <div className="release-card" onClick={onClick}>
      <div className="release-image">
        {badge && <div className="new-badge">NEW</div>}
        {imageUrl && <img src={imageUrl} alt={title} className="product-image" />}
      </div>
      <div className="release-info">
        <h3 className="release-title">{title}</h3>
        <div className="release-price">{price}</div>
        {subtitle && <div className="release-subtitle">{subtitle}</div>}
        <div className="release-status">{status}</div>
      </div>
    </div>
  );
};

export default ProductCard;
