// src/pages/Services.jsx
import React from 'react';
import Services from '../Components/Services/Services';
import Portfolio from '../Components/Portfolio/Portfolio';

const ServicesPage = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Our Services</h1>
        <p className="page-intro">
          We offer comprehensive digital solutions to help your business thrive in the modern landscape.
        </p>
      </div>
      <Services />
      <Portfolio />
    </div>
  );
};

export default ServicesPage;