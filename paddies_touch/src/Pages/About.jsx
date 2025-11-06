// src/pages/About.jsx
import React from 'react';
import './About.css';
import founder from '../Assets/Images/founder.jpg';

const About = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>About PaddiesTouch</h1>
        
        {/* Hero Section */}
        <div className="about-hero">
          <div className="hero-content">
            <h2>Seamless Branding, Marketing, Event Coverage & CCTV Installation</h2>
            <p className="hero-description">
              Paddies Touch is a full-service agency that specializes in branding, social media managing and marketing, 
              event coverage, and CCTV Installation and maintenance. We help businesses and individuals establish strong 
              brand identities, engage with their audience, and execute business strategies seamlessly, bridging the gap 
              between digital presence and real-world execution.
            </p>
          </div>
        </div>

        <div className="about-content">
          {/* Mission & Vision Section */}
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses and individuals with innovative branding, strategic marketing, 
                and expert project execution. We bring visions to life by integrating digital creativity, 
                event coverage, and project management into seamless, high-quality solutions.
              </p>
            </div>

            <div className="vision-card">
              <div className="icon">🚀</div>
              <h3>Our Vision</h3>
              <p>
                To become a globally recognized full-service agency that transforms ideas into powerful brands, 
                memorable events, and successful projects. We strive to set new industry standards through 
                innovation, creativity, and excellence.
              </p>
            </div>
          </div>

          {/* Founder Section */}
          <div className="founder-section">
            <div className="founder-card">
              <div className="founder-image">
                <img 
                  src={founder}  
                  alt="Giusseppe Saap-Foster - Founder & CEO" 
                  className="founder-photo"
                />
              </div>
              <div className="founder-info">
                <h4>Giusseppe Saap-Foster</h4>
                <p className="founder-title">Founder & CEO</p>
                <p className="founder-bio">
                  With a passion for innovation and excellence, Giusseppe leads PaddiesTouch 
                  in delivering exceptional solutions that bridge the gap between digital 
                  creativity and real-world execution.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="why-choose-us">
            <h3>Why Choose PaddiesTouch?</h3>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">💎</div>
                <h4>Professional Service</h4>
                <p>Reliable and professional services tailored to your needs</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <h4>Creative Solutions</h4>
                <p>Innovative approaches that set you apart from competition</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💰</div>
                <h4>Competitive Pricing</h4>
                <p>High-quality services at competitive and transparent pricing</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔧</div>
                <h4>Full-Service</h4>
                <p>End-to-end solutions from branding to technical implementation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;