import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/footer.css';
import Button from './Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    // Add your newsletter subscription logic here
    console.log('Subscribed with:', email);
    e.target.reset();
  };

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Twitter', url: 'https://twitter.com' }
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Shop', path: '/shop-all' },
    { name: 'Collections', path: '/collections' },
    { name: 'Contact', path: '/contact' }
  ];

  const supportLinks = [
    { name: 'FAQs', path: '/faq' },
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' }
  ];

  return (
    <footer aria-label="Site footer">
      <div className="footer-container">
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} aria-label={`Navigate to ${link.name}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-section support">
          <h3>Customer Support</h3>
          <ul>
            {supportLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} aria-label={`Navigate to ${link.name}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-section newsletter">
          <h3>Join Our Exclusive List</h3>
          <p>Subscribe for early access, new arrivals, and VIP offers.</p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="newsletter-input-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                required 
                aria-label="Email address for newsletter subscription"
              />
            </div>
            <Button className="btn-subscribe" type="submit" aria-label="Subscribe to newsletter">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">© {currentYear} Vain. All rights reserved.</p>
        <div className="social-media">
          {socialLinks.map((social) => (
            <a 
              key={social.name}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Visit our ${social.name} page`}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;