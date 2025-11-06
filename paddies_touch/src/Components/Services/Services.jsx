// src/components/Services/Services.jsx
import React from 'react';
import './Services.css';
import webdev from '../../Assets/Images/webdev.jpg';
import branding from '../../Assets/Images/branding.jpg';
import cctv from '../../Assets/Images/cctv.jpg';
import photography from '../../Assets/Images/photography.jpg';
import socialmedia from '../../Assets/Images/socialmedia.jpg';
import eventcoverage from '../../Assets/Images/eventcoverage.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      image: webdev
    },
    {
      id: 2,
      title: 'Branding & Design',
      description: 'Complete brand identity development including logos and visual assets.',
      image: branding
    },
    {
      id: 3,
      title: 'Photography',
      description: 'Professional photography for events, products, and corporate needs.',
      image: photography
    },
    {
      id: 4,
      title: 'Event Coverage',
      description: 'Comprehensive event photography and videography services.',
      image: eventcoverage
    },
    {
      id: 5,
      title: 'CCTV Camera Installation',
      description: 'Professional security camera installation and monitoring solutions.',
      image: cctv
    },
    {
      id: 6,
      title: 'Social Media Marketing',
      description: 'Strategic social media management and marketing campaigns.',
      image: socialmedia
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map(service => (
            <div 
              key={service.id} 
              className="service-card"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;