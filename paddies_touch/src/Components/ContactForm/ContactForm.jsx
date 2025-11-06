// src/components/ContactForm/ContactForm.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS credentials
    const serviceID = 'service_7g0iozi';
    const templateID = 'template_38jrtkm';
    const userID = 'nOldA__ARw2rGlgMh';

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        alert('✅ Message sent successfully! We’ll get back to you soon.');
        setFormData({ name: '', email: '', service: '', message: '' });
      })
      .catch((error) => {
        console.error('Email send error:', error);
        alert('❌ Failed to send message. Please try again later.');
      });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="service">Service Interested In</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select a service</option>
          <option value="web-development">Web Development</option>
          <option value="branding">Branding & Design</option>
          <option value="photography">Photography</option>
          <option value="event-coverage">Event Coverage</option>
          <option value="cctv">CCTV Installation</option>
          <option value="social-media">Social Media Marketing</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">Send Message</button>
    </form>
  );
};

export default ContactForm;
