import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import '../styles/pages/FAQ.css';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    { id: 'all', name: 'All Questions', count: 0 },
    { id: 'orders', name: 'Orders & Payment', count: 6 },
    { id: 'shipping', name: 'Shipping & Delivery', count: 8 },
    { id: 'returns', name: 'Returns & Exchanges', count: 5 },
    { id: 'sizing', name: 'Sizing & Fit', count: 4 },
    { id: 'care', name: 'Care & Maintenance', count: 3 },
    { id: 'account', name: 'Account & Profile', count: 4 }
  ];

  const faqData = [
    // Orders & Payment
    {
      id: 1,
      category: 'orders',
      question: 'How do I place an order?',
      answer: 'Simply browse our collections, select your desired items, choose your size, and add them to your cart. Then proceed to checkout, enter your shipping information, and complete your payment. You\'ll receive an order confirmation email once your purchase is successful.'
    },
    {
      id: 2,
      category: 'orders',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and Shop Pay. All payments are processed securely through our encrypted payment system.'
    },
    {
      id: 3,
      category: 'orders',
      question: 'Can I modify or cancel my order?',
      answer: 'Orders can be modified or cancelled within 1 hour of placement. After this time, your order enters our fulfillment process and cannot be changed. Contact our customer service team immediately if you need to make changes.'
    },
    {
      id: 4,
      category: 'orders',
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to over 50 countries worldwide. International shipping costs and delivery times vary by destination. All international orders may be subject to customs duties and taxes, which are the responsibility of the customer.'
    },
    {
      id: 5,
      category: 'orders',
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can use this number to track your package on our website or the carrier\'s tracking page. Orders typically ship within 1-2 business days.'
    },
    {
      id: 6,
      category: 'orders',
      question: 'Is my payment information secure?',
      answer: 'Absolutely. We use industry-standard SSL encryption to protect your payment information. Your credit card details are processed through secure payment gateways and are never stored on our servers.'
    },

    // Shipping & Delivery
    {
      id: 7,
      category: 'shipping',
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days within the US. Express shipping (1-2 business days) and overnight shipping are also available. International shipping typically takes 7-14 business days depending on the destination.'
    },
    {
      id: 8,
      category: 'shipping',
      question: 'How much does shipping cost?',
      answer: 'Standard shipping is $5.99 for orders under $100. Orders over $100 qualify for free standard shipping. Express shipping is $12.99 and overnight shipping is $24.99. International shipping rates vary by destination.'
    },
    {
      id: 9,
      category: 'shipping',
      question: 'Do you offer free shipping?',
      answer: 'Yes! We offer free standard shipping on all orders over $100 within the United States. We also run special promotions throughout the year with free shipping on any order amount.'
    },
    {
      id: 10,
      category: 'shipping',
      question: 'Can I ship to a different address?',
      answer: 'Yes, you can ship to any address during checkout. We also offer gift wrapping services for orders being sent as gifts. Make sure to double-check the shipping address before completing your order.'
    },
    {
      id: 11,
      category: 'shipping',
      question: 'What if my package is lost or damaged?',
      answer: 'If your package is lost or arrives damaged, contact us immediately. We work with our shipping partners to investigate lost packages and will replace or refund your order. All orders are insured for their full value.'
    },
    {
      id: 12,
      category: 'shipping',
      question: 'Do you ship to PO boxes?',
      answer: 'We can ship to PO boxes using USPS, but express and overnight shipping options are not available for PO box addresses. We recommend using a physical address for faster delivery options.'
    },
    {
      id: 13,
      category: 'shipping',
      question: 'Can I change my shipping address after ordering?',
      answer: 'Shipping addresses can only be changed within 1 hour of placing your order. Once your order enters fulfillment, the address cannot be modified. Contact customer service immediately if you need to update your address.'
    },
    {
      id: 14,
      category: 'shipping',
      question: 'Do you offer same-day delivery?',
      answer: 'Same-day delivery is available in select metropolitan areas including NYC, LA, and Chicago. This service must be requested before 2 PM and additional fees apply. Check availability at checkout.'
    },

    // Returns & Exchanges
    {
      id: 15,
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of delivery. Items must be unworn, unwashed, and have all original tags attached. Return shipping is free for US customers, and refunds are processed within 5-7 business days of receiving your return.'
    },
    {
      id: 16,
      category: 'returns',
      question: 'How do I start a return?',
      answer: 'Log into your account and go to your order history, or email our customer service team. We\'ll provide you with a prepaid return label and instructions. Package your items securely and drop off at any authorized shipping location.'
    },
    {
      id: 17,
      category: 'returns',
      question: 'Can I exchange items for a different size?',
      answer: 'Yes! Exchanges for different sizes are processed as returns with new orders. Return your original item and place a new order for your preferred size. We\'ll refund the return and charge for the new item separately.'
    },
    {
      id: 18,
      category: 'returns',
      question: 'Are sale items returnable?',
      answer: 'Sale items marked as "Final Sale" cannot be returned or exchanged. Regular sale items follow our standard 30-day return policy. Check the product page for specific return eligibility before purchasing.'
    },
    {
      id: 19,
      category: 'returns',
      question: 'What condition do returned items need to be in?',
      answer: 'Items must be in original condition - unworn, unwashed, unaltered, and with all tags attached. Items showing signs of wear, damage, or missing tags cannot be accepted for return.'
    },

    // Sizing & Fit
    {
      id: 20,
      category: 'sizing',
      question: 'How do I find my size?',
      answer: 'Use our detailed size guide available on each product page. We provide measurements for chest, waist, hips, and length. When in doubt, we recommend sizing up, as our fits tend to run slightly small for a modern, tailored look.'
    },
    {
      id: 21,
      category: 'sizing',
      question: 'Do your clothes run true to size?',
      answer: 'Our pieces are designed with a modern, tailored fit that may run slightly smaller than traditional sizing. We recommend checking our size guide and reading customer reviews for fit feedback on specific items.'
    },
    {
      id: 22,
      category: 'sizing',
      question: 'What if I\'m between sizes?',
      answer: 'If you\'re between sizes, we generally recommend sizing up for comfort. However, this depends on the style and your personal fit preference. Check the product description for specific fit notes or contact our styling team for personalized advice.'
    },
    {
      id: 23,
      category: 'sizing',
      question: 'Do you offer alterations?',
      answer: 'We don\'t offer in-house alterations, but we can recommend trusted tailors in major cities. Many of our pieces are designed to be easily altered by professional tailors for the perfect fit.'
    },

    // Care & Maintenance
    {
      id: 24,
      category: 'care',
      question: 'How should I care for my VAIN pieces?',
      answer: 'Care instructions are included with each item and on the product page. Generally, we recommend professional dry cleaning for structured pieces and cold water washing for casual items. Always check the care label before cleaning.'
    },
    {
      id: 25,
      category: 'care',
      question: 'Can I machine wash denim items?',
      answer: 'Yes, but we recommend washing denim inside out in cold water and air drying to preserve the color and fit. For raw denim pieces, wait at least 6 months before the first wash to allow proper breaking in.'
    },
    {
      id: 26,
      category: 'care',
      question: 'How do I remove stains from my garments?',
      answer: 'For best results, address stains immediately and take the item to a professional cleaner. Avoid rubbing stains, as this can damage the fabric. Different fabrics require different treatment methods, so professional cleaning is always recommended.'
    },

    // Account & Profile
    {
      id: 27,
      category: 'account',
      question: 'How do I create an account?',
      answer: 'Click "Sign Up" at the top of any page, or create an account during checkout. You\'ll need to provide your email address and create a password. Account holders get early access to sales, order tracking, and faster checkout.'
    },
    {
      id: 28,
      category: 'account',
      question: 'I forgot my password. How do I reset it?',
      answer: 'Click "Forgot Password" on the login page and enter your email address. We\'ll send you a secure link to reset your password. The link expires after 24 hours for security reasons.'
    },
    {
      id: 29,
      category: 'account',
      question: 'How do I update my account information?',
      answer: 'Log into your account and go to "Account Settings" where you can update your personal information, shipping addresses, and email preferences. Changes are saved automatically.'
    },
    {
      id: 30,
      category: 'account',
      question: 'Can I save items for later?',
      answer: 'Yes! Use the "Save for Later" heart icon on product pages to create a wishlist. Saved items are stored in your account and you\'ll be notified if they go on sale or are running low in stock.'
    }
  ];

  // Update category counts
  faqCategories[0].count = faqData.length;

  const getFilteredFAQs = () => {
    if (selectedCategory === 'all') {
      return faqData;
    }
    return faqData.filter(faq => faq.category === selectedCategory);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setOpenItems(new Set()); // Close all items when changing category
  };

  return (
    <>
      <Header />
      <div className="page">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about orders, shipping, returns, and more."
        />

        {/* Search Section */}
        <div className="faq-search-section">
          <div className="search-container">
            <h2>How can we help you?</h2>
            <p>Search our knowledge base or browse categories below</p>
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Search for answers..." 
                className="search-input"
              />
              <button className="search-btn">Search</button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="faq-categories">
          <h3>Browse by Category</h3>
          <div className="category-buttons">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="faq-content">
          <div className="faq-items">
            {getFilteredFAQs().map((faq) => (
              <div key={faq.id} className="faq-item">
                <button 
                  className={`faq-question ${openItems.has(faq.id) ? 'open' : ''}`}
                  onClick={() => toggleItem(faq.id)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openItems.has(faq.id) ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer ${openItems.has(faq.id) ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="faq-actions">
          <div className="actions-grid">
            <div className="action-card">
              <h3>Still need help?</h3>
              <p>Our customer service team is here to assist you with any questions.</p>
              <a href="/contact" className="action-btn">Contact Support</a>
            </div>
            <div className="action-card">
              <h3>Size Guide</h3>
              <p>Find your perfect fit with our comprehensive sizing charts.</p>
              <button className="action-btn">View Size Guide</button>
            </div>
            <div className="action-card">
              <h3>Return Center</h3>
              <p>Start a return or exchange quickly and easily online.</p>
              <button className="action-btn">Start Return</button>
            </div>
            <div className="action-card">
              <h3>Order Status</h3>
              <p>Track your order and get real-time shipping updates.</p>
              <button className="action-btn">Track Order</button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="faq-contact">
          <div className="contact-content">
            <h2>Didn't find what you're looking for?</h2>
            <p>Our customer service team is available Monday through Friday, 9 AM to 6 PM EST.</p>
            <div className="contact-options">
              <div className="contact-option">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email Support</h4>
                  <p>support@vainofficial.com</p>
                  <span>Response within 24 hours</span>
                </div>
              </div>
              <div className="contact-option">
                <div className="contact-icon">💬</div>
                <div className="contact-details">
                  <h4>Live Chat</h4>
                  <p>Available during business hours</p>
                  <span>Instant responses</span>
                </div>
              </div>
              <div className="contact-option">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Phone Support</h4>
                  <p>+1 (555) 123-4567</p>
                  <span>Mon-Fri, 9 AM - 6 PM EST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;