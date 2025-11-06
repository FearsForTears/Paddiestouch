// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Link to="/">PaddiesTouch</Link>
            </div>
            <p className="footer-description">
              Professional digital solutions for web development, branding, photography, 
              and security services. Transforming ideas into exceptional digital experiences.
            </p>
            <div className="social-links">
              <a href="https://wa.me/233547731905" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://facebook.com/paddiestouch" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com/paddiestouch" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/company/paddiestouch" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#web-dev">Web Development</a></li>
              <li><a href="#branding">Branding & Design</a></li>
              <li><a href="#photography">Photography</a></li>
              <li><a href="#events">Event Coverage</a></li>
              <li><a href="#cctv">CCTV Installation</a></li>
              <li><a href="#social">Social Media Marketing</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="footer-links">
              <li>
                <a href="mailto:contact@paddiestouch.com" className="contact-link">
                  <i className="fas fa-envelope contact-icon"></i>
                  contact@paddiestouch.com
                </a>
              </li>
              <li>
                <a href="tel:+233547731905" className="contact-link">
                  <i className="fas fa-phone contact-icon"></i>
                  +233 54 773 1905
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=PowerLand,Madina,Accra" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-link"
                >
                  <i className="fas fa-map-marker-alt contact-icon"></i>
                  PowerLand, Madina - Accra
                </a>
              </li>
              <li>
                <span className="contact-link">
                  <i className="fas fa-clock contact-icon"></i>
                  Mon - Fri: 9AM - 6PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Paddies Touch. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;