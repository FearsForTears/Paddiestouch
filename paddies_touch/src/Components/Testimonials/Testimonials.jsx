// src/components/Testimonials/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

// Import client logos - adjust paths as needed
import Iskha_logo from '../../Assets/Images/Iskha_logo.png';
import Wondabyte_logo from '../../Assets/Images/Wondabyte_logo.png';
import secureSolutionsLogo from '/public/Paddiestouchlogo.png';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'JESSICA',
      company: 'ISHKA_Haute_Couture',
      text: 'Working with Paddies Touch was a game-changer for my business. They designed a stunning content calendar and flyer that perfectly captured my brand’s vision and values. Their team was professional, attentive, and delivered everything on time.  Highly recommend!',
      rating: 4.5,
      logo: Iskha_logo,
      position: 'CEO'
    },
    {
      id: 2,
      name: 'WONDER',
      company: 'WONDERBYTE Technologies',
      text: 'Partnering with Paddies Touch on various projects has been an excellent experience. Giusseppe’s creativity, professionalism, and attention to detail consistently deliver outstanding results, whether in branding, marketing, or event coverage. I trust them to bring any vision to life.',
      rating: 5,
      logo: Wondabyte_logo,
      position: 'Managing Director'
    },
    {
      id: 3,
      name: 'GERALD',
      company: 'WIN ENTERPRICE',
      text: 'The training I received from Paddies Touch was incredibly insightful and hands-on. I feel more confident in managing digital projects and creating impactful websites. The best part was the support I received even after the training!',
      rating: 4,
      logo: secureSolutionsLogo,
      position: 'Operations Manager'
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <>
        {'⭐'.repeat(fullStars)}
        {halfStar && '⭐'}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  const renderDecimalStars = (rating) => {
    return (
      <div className="star-rating">
        <div className="stars-container">
          {'★★★★★'.split('').map((star, index) => {
            let fillPercentage = 0;
            if (index < Math.floor(rating)) {
              fillPercentage = 100;
            } else if (index === Math.floor(rating) && rating % 1 !== 0) {
              fillPercentage = (rating % 1) * 100;
            }
            
            return (
              <div key={index} className="star-wrapper">
                <div className="star-background">★</div>
                <div 
                  className="star-fill" 
                  style={{ width: `${fillPercentage}%` }}
                >
                  ★
                </div>
              </div>
            );
          })}
        </div>
        <span className="rating-number">{rating}</span>
      </div>
    );
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2>What Our Clients Say</h2>
          <p className="testimonials-subtitle">
            Don't just take our word for it - hear from businesses we've helped transform
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-logo">
                  <img 
                    src={testimonial.logo} 
                    alt={`${testimonial.company} logo`}
                    onError={(e) => {
                      // Fallback to company initials if logo fails to load
                      e.target.style.display = 'none';
                      const fallback = e.target.parentNode.querySelector('.logo-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="logo-fallback">
                    {testimonial.company.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="testimonial-rating">
                  {renderDecimalStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-author">
                <div className="author-info">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.position}</span>
                  <span className="company-name">{testimonial.company}</span>
                </div>
              </div>
              
              <div className="testimonial-quote-icon">❝</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;