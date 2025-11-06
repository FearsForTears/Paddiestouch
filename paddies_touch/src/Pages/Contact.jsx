// src/pages/Contact.jsx
import React from 'react';
import ContactForm from '../Components/ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      url: 'https://wa.me/233547731905',
      color: '#25D366',
      description: 'Chat with us instantly'
    },
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      url: 'https://facebook.com/paddies.touch',
      color: '#1877F2',
      description: 'Follow our updates'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://instagram.com/paddies.touch',
      color: '#E4405F',
      description: 'See our portfolio'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://linkedin.com/company/paddiestouch',
      color: '#0A66C2',
      description: 'Connect professionally'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/paddiestouch',
      color: '#1DA1F2',
      description: 'Latest news & updates'
    },
    {
      name: 'YouTube',
      icon: 'fab fa-youtube',
      url: 'https://youtube.com/@paddiestouch',
      color: '#FF0000',
      description: 'Watch our tutorials'
    }
  ];

  return (
    <div className="page contact-page">
      <div className="container">
        <h1>Get In Touch</h1>
        <p className="page-subtitle">Let's discuss your next project and bring your ideas to life</p>
        
        <div className="contact-content">
          {/* Contact Information Section */}
          <div className="contact-info">
            <div className="info-card">
              <h3>Contact Information</h3>
              <p className="info-description">
                Reach out to us through any of these channels. We're always happy to help!
              </p>
              
              <div className="contact-details">
                <a href="mailto:contact@paddiestouch.com" className="contact-item clickable">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <strong>Email</strong>
                    <span>contact@paddiestouch.com</span>
                    <small>We'll respond within 24 hours</small>
                  </div>
                </a>
                
                <a href="tel:+233547731905" className="contact-item clickable">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <strong>Phone</strong>
                    <span>+233 54 773 1905</span>
                    <small>Mon - Fri: 9AM - 6PM</small>
                  </div>
                </a>
                
                <a 
                  href="https://maps.google.com/?q=PowerLand,Madina,Accra,Ghana" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-item clickable"
                >
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <strong>Address</strong>
                    <span>PowerLand, Madina - Accra</span>
                    <small>Servicing clients worldwide</small>
                  </div>
                </a>
                
                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div className="contact-text">
                    <strong>Business Hours</strong>
                    <span>Monday - Friday: 9AM - 6PM</span>
                    <small>Weekend appointments available</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-container">
            <div className="form-card">
              <h3>Send Us a Message</h3>
              <p className="form-description">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Quick Action Banner */}
        <div className="quick-action-banner">
          <div className="banner-content">
            <h4>Ready to Start Your Project?</h4>
            <p>Let's discuss your requirements and provide you with a customized solution</p>
            <div className="banner-actions">
              <a href="https://wa.me/233547731905" className="action-btn whatsapp-btn">
                <i className="fab fa-whatsapp"></i>
                Chat on WhatsApp
              </a>
              <a href="tel:+233547731905" className="action-btn call-btn">
                <i className="fas fa-phone"></i>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
                               
export default Contact;