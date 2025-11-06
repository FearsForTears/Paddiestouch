// src/components/Brands/Brands.jsx
import React from 'react';
import './Brands.css';

// Importing brand logos 
import Iskha_logo from '../../Assets/Images/Iskha_logo.png';
import Wondabyte_logo from '../../Assets/Images/Wondabyte_logo.png';

const Brands = () => {
  const brands = [
    { id: 1, name: 'ISHKA_Haute Couture', logo: Iskha_logo },
    { id: 2, name: 'Wonderbyte Technologies', logo: Wondabyte_logo }
  ];

  // Duplicate brands for infinite loop
  const duplicatedBrands = [...brands, ...brands];

  // Fallback component for missing images
  const LogoFallback = ({ name }) => (
    <div className="logo-fallback">
      {name.split(' ').map(word => word[0]).join('')}
    </div>
  );

  return (
    <section className="brands">
      <div className="container">
        <h3>Trusted By Leading Brands</h3>
        <div className="brands-scroll-container">
          <div className="brands-scroll">
            {duplicatedBrands.map((brand, index) => (
              <div key={`${brand.id}-${index}`} className="brand-item">
                <div className="brand-logo-container">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="brand-logo-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.parentNode.querySelector('.logo-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <LogoFallback name={brand.name} />
                </div>
                <span className="brand-name">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;