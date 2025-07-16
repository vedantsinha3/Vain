import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import '../styles/pages/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('Sorry, there was an error sending your message. Please try again.');
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'hello@vainofficial.com',
      icon: '📧'
    },
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      icon: '📞'
    },
    {
      title: 'Address',
      value: '123 Fashion District, New York, NY 10001',
      icon: '📍'
    },
    {
      title: 'Hours',
      value: 'Mon-Fri: 9AM-6PM EST',
      icon: '🕐'
    }
  ];

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/vainofficial', icon: '📷' },
    { name: 'Twitter', url: 'https://twitter.com/vainofficial', icon: '🐦' },
    { name: 'Facebook', url: 'https://facebook.com/vainofficial', icon: '👥' },
    { name: 'TikTok', url: 'https://tiktok.com/@vainofficial', icon: '🎵' }
  ];

  const departments = [
    {
      name: 'Customer Service',
      email: 'support@vainofficial.com',
      description: 'Orders, returns, general inquiries'
    },
    {
      name: 'Press & Media',
      email: 'press@vainofficial.com',
      description: 'Media inquiries, collaborations'
    },
    {
      name: 'Wholesale',
      email: 'wholesale@vainofficial.com',
      description: 'Bulk orders, retail partnerships'
    },
    {
      name: 'Careers',
      email: 'careers@vainofficial.com',
      description: 'Job opportunities, internships'
    }
  ];

  return (
    <>
      <Header />
      <div className="page">
        <SectionHeader
          title="Contact Us"
          subtitle="Get in touch with our team. We're here to help with any questions or feedback."
        />

        <div className="contact-container">
          {/* Contact Form Section */}
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              {submitStatus && (
                <div className={`form-status ${submitStatus.includes('Thank you') ? 'success' : 'error'}`}>
                  {submitStatus}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="contact-info-section">
            <h2>Get in Touch</h2>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="social-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Departments Section */}
        <div className="departments-section">
          <h2>Contact by Department</h2>
          <div className="departments-grid">
            {departments.map((dept, index) => (
              <div key={index} className="department-card">
                <h3>{dept.name}</h3>
                <p>{dept.description}</p>
                <a href={`mailto:${dept.email}`} className="department-email">
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How long does shipping take?</h4>
              <p>Standard shipping takes 3-5 business days. Express shipping is available for next-day delivery.</p>
            </div>
            <div className="faq-item">
              <h4>What's your return policy?</h4>
              <p>We accept returns within 30 days of purchase. Items must be unworn with original tags.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer international shipping?</h4>
              <p>Yes, we ship worldwide. International shipping takes 7-14 business days.</p>
            </div>
            <div className="faq-item">
              <h4>How can I track my order?</h4>
              <p>You'll receive a tracking number via email once your order ships. Use it on our tracking page.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;