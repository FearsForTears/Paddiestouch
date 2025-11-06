// src/components/Header/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// Importing logo 

import logo from '/public/Paddiestouchlogo.png'; // Adjust path as needed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            {/* Logo Image Version */}
            <img 
              src={logo} 
              alt="Paddies Touch" 
              className="logo-image"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Fallback Text Version */}
            <span className="logo-text">PaddiesTouch</span>
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;