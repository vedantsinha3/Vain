import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.css';

const Header = () => {
  return (
    <>
    <header className="site-header">
      <Link to="/">
        <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      </Link>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/trending">Trending</Link></li>
          <li><Link to="/new-releases">New Releases</Link></li>
          <li><Link to="/shop-all">Shop All</Link></li>
          <li><Link to="/denim">Denim</Link></li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;