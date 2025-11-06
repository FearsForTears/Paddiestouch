import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import web1 from '../../Assets/Images/web1.jpg';
import web2 from '../../Assets/Images/web2.jpg';
import web3 from '../../Assets/Images/web3.jpg';
import branding1 from '../../Assets/Images/branding1.jpg';
import branding2 from '../../Assets/Images/branding2.jpg';
import branding3 from '../../Assets/Images/branding3.jpg';
import photography1 from '../../Assets/Images/photography1.jpg';
import photography2 from '../../Assets/Images/photography2.jpg';
import photography from '../../Assets/Images/photography.jpg';
import camera1 from '../../Assets/Images/camera1.jpg';
import camera2 from '../../Assets/Images/camera2.jpg';
import cctv from '../../Assets/Images/cctv.jpg';
import coverage from '../../Assets/Images/coverage.jpg';
import coverage2 from '../../Assets/Images/coverage2.jpg';
import coverage4 from '../../Assets/Images/coverage4.jpg';
import consulting1 from '../../Assets/Images/consulting1.jpg';
import consulting2 from '../../Assets/Images/consulting2.jpg';
import consulting3 from '../../Assets/Images/consulting3.jpg';
import socialmedia from '../../Assets/Images/socialmedia.jpg';
import socialmedia1 from '../../Assets/Images/socialmedia1.jpg';


const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('web-development');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = {
    'web-development': {
      name: 'Web Development',
      images: [
        web1, web2, web3
      ]
    },
    'cctv-installation': {
      name: 'CCTV Installation',
      images: [
        cctv, camera1, camera2
      ]
    },
    'photography': {
      name: 'Photography',
      images: [
        photography, photography1, photography2
      ]
    },
    'videography': {
      name: 'Videography',
      images: [
        coverage, coverage2, coverage4
      ]
    },
    'branding-design': {
      name: 'Branding & Design',
      images: [
        branding1, branding2, branding3
      ]
    },
    'business-consultancy': {
      name: 'Business Consultancy',
      images: [
        consulting1, consulting2, consulting3
      ]
    },
    'social-media-marketing': {
      name: 'Social Media Marketing',
      images: [
        socialmedia, socialmedia1
      ]
    }
  };

  const categories = [
    { id: 'web-development', label: 'Web Development' },
    { id: 'cctv-installation', label: 'CCTV Installation' },
    { id: 'photography', label: 'Photography' },
    { id: 'videography', label: 'Videography' },
    { id: 'branding-design', label: 'Branding & Design' },
    { id: 'business-consultancy', label: 'Business Consultancy' },
    { id: 'social-media-marketing', label: 'Social Media Marketing' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % projects[activeCategory].images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? projects[activeCategory].images.length - 1 : prevIndex - 1
    );
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentImageIndex(0);
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeCategory, currentImageIndex]);

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">My Portfolio</h1>
      
      {/* Category Filter */}
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Image Carousel */}
      <div className="carousel-container">
        <div className="carousel">
          <button className="carousel-btn prev-btn" onClick={prevImage}>
            ‹
          </button>
          
          <div className="image-container">
            <img 
              src={projects[activeCategory].images[currentImageIndex]} 
              alt={`${projects[activeCategory].name} project`}
              className="carousel-image"
            />
            <div className="image-overlay">
              <h3 className="project-name">{projects[activeCategory].name}</h3>
              <div className="image-counter">
                {currentImageIndex + 1} / {projects[activeCategory].images.length}
              </div>
            </div>
          </div>

          <button className="carousel-btn next-btn" onClick={nextImage}>
            ›
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="carousel-dots">
          {projects[activeCategory].images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;