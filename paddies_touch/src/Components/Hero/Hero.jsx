// src/components/Hero/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <div className="welcome-text">
            Welcome to Paddies Touch
          </div>
          <h1 className="hero-title">
            <span className="title-line">From Dreams</span>
            <span className="title-line">to Reality,</span>
            <span className="title-line accent-line">We Make It Happen.</span>
          </h1>
        </div>
        
        <div className="hero-buttons">
          <Link to="/services" className="btn btn-primary">
            <span className="btn-text">View Services</span>
            <div className="btn-glow"></div>
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            <span className="btn-text">Get In Touch</span>
            <div className="btn-glow"></div>
          </Link>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;