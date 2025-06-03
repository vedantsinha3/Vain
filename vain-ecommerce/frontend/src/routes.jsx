import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ShopAll from './pages/ShopAll';
import Denim from './pages/Denim';
import NewReleases from './pages/NewRelease';
import Trending from './pages/Trending';
import About from './pages/About';
import Contact from './pages/Contact';
import Shipping from './pages/Shipping';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/shop-all" element={<ShopAll />} />
        <Route path="/denim" element={<Denim />} />
        <Route path="/new-releases" element={<NewReleases />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping" element={<Shipping />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;