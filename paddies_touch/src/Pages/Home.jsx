// src/pages/Home.jsx
import React from 'react';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import Services from '../Components/Services/Services';
import Testimonials from '../Components/Testimonials/Testimonials';
import Brands from '../Components/Brands/Brands';
import FAQ from '../Components/FAQ/FAQ';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <FAQ />
      <Brands />
    </div>
  );
};

export default Home;