import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import '../styles/pages/Shipping.css';

const Shipping = () => {
  const options = [
    {
      title: 'Standard',
      eta: '3-5 business days',
      price: '$5.99 (Free over $100)',
      description: 'Reliable delivery for everyday orders across the U.S.'
    },
    {
      title: 'Express',
      eta: '1-2 business days',
      price: '$12.99',
      description: 'Faster delivery for when you need it sooner.'
    },
    {
      title: 'Overnight',
      eta: 'Next business day',
      price: '$24.99',
      description: 'Priority handling and overnight delivery to most locations.'
    },
    {
      title: 'International',
      eta: '7-14 business days',
      price: 'Rates vary by destination',
      description: 'Worldwide shipping with full tracking and customs support.'
    }
  ];

  const policies = [
    {
      heading: 'Order Processing',
      content: 'Orders are processed within 1-2 business days. During peak seasons and new releases, processing may take slightly longer.'
    },
    {
      heading: 'Tracking',
      content: 'You will receive a shipping confirmation email with a tracking number as soon as your order ships.'
    },
    {
      heading: 'Customs & Duties',
      content: 'International orders may be subject to customs duties and taxes. These fees are the responsibility of the customer.'
    },
    {
      heading: 'Address Changes',
      content: 'Shipping addresses can be updated within 1 hour of placing your order. Contact support immediately for changes.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Countries Served' },
    { number: '24h', label: 'Avg. Processing' },
    { number: '100%', label: 'Order Tracking' }
  ];

  return (
    <>
      <Header />
      <div className="page">
        <SectionHeader
          title="Shipping"
          subtitle="Fast, reliable delivery with global coverage and transparent rates."
        />

        {/* Hero / Overview */}
        <section className="shipping-hero">
          <div className="hero-content">
            <h2>Delivery, Simplified</h2>
            <p>We partner with trusted carriers to ensure your order arrives safely and on time. Choose the option that fits your timeline.</p>
            <div className="hero-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shipping Options */}
        <section className="shipping-options">
          <h2>Shipping Options</h2>
          <div className="options-grid">
            {options.map((opt, idx) => (
              <div className="option-card" key={idx}>
                <div className="option-badge">{opt.title}</div>
                <h3>{opt.eta}</h3>
                <p className="option-price">{opt.price}</p>
                <p className="option-desc">{opt.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rates & Zones */}
        <section className="shipping-rates">
          <h2>Rates & Zones</h2>
          <div className="rates-grid">
            <div className="rate-card">
              <h4>United States</h4>
              <ul>
                <li><span>Standard</span><span>$5.99</span></li>
                <li><span>Express</span><span>$12.99</span></li>
                <li><span>Overnight</span><span>$24.99</span></li>
              </ul>
              <div className="note">Free standard shipping on orders over $100</div>
            </div>
            <div className="rate-card">
              <h4>Canada</h4>
              <ul>
                <li><span>Standard</span><span>From $9.99</span></li>
                <li><span>Express</span><span>From $19.99</span></li>
              </ul>
              <div className="note">Duties and taxes calculated at checkout</div>
            </div>
            <div className="rate-card">
              <h4>International</h4>
              <ul>
                <li><span>Standard</span><span>Varies</span></li>
                <li><span>Express</span><span>Varies</span></li>
              </ul>
              <div className="note">Final rates shown at checkout by destination</div>
            </div>
          </div>
        </section>

        {/* Policies */}
        <section className="shipping-policies">
          <h2>Shipping Policies</h2>
          <div className="policies-grid">
            {policies.map((p, idx) => (
              <div className="policy-item" key={idx}>
                <h4>{p.heading}</h4>
                <p>{p.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="shipping-cta">
          <div className="cta-box">
            <h3>Questions about delivery?</h3>
            <p>Visit our FAQ or contact support and we will help you choose the best option.</p>
            <div className="cta-actions">
              <Button className="cta-btn">View FAQs</Button>
              <Button className="cta-btn secondary">Contact Support</Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Shipping;