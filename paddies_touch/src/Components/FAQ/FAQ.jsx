import React, { useState, useRef, useEffect } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const faqData = [
    {
      question: "What services does Paddies Touch offer?",
      answer: "Paddies Touch offers a comprehensive range of creative services including Website Development, Graphic Design, Social Media Marketing, Event Coverage, Photography and CCTV Camera Installation and Maintenance. We help individuals and businesses establish their brand presence online with creative user-friendly, and impactful solutions."
    },
    {
      question: "What sets Paddies Touch apart from other agencies?",
      answer: "Our unique approach combines creative excellence with strategic thinking. We focus on understanding your business goals deeply, delivering personalized solutions, and maintaining consistent communication throughout the project. Our team's expertise and commitment to quality set us apart in the industry."
    },
    {
      question: "What types of graphic design services do you offer?",
      answer: "We offer a wide range of graphic design services including logo design, brand identity systems, marketing materials (brochures, flyers, business cards), social media graphics, packaging design, infographics, and presentation design. We also provide UI/UX design for digital products and websites."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing is tailored to each project's specific requirements, scope, and timeline. We offer flexible pricing models including project-based fees, retainer agreements, and hourly rates. Contact us for a free consultation and customized quote based on your unique needs."
    }
  ];

  // Initialize refs
  useEffect(() => {
    answerRefs.current = answerRefs.current.slice(0, faqData.length);
  }, [faqData.length]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const calculateMaxHeight = (index) => {
    if (activeIndex === index && answerRefs.current[index]) {
      return answerRefs.current[index].scrollHeight + 40; // Extra padding
    }
    return 0;
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button 
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              <span className="faq-icon">
                <span className="icon-line horizontal"></span>
                <span className="icon-line vertical"></span>
              </span>
              <span className="question-text">{faq.question}</span>
            </button>
            <div 
              className="faq-answer-wrapper"
              style={{
                maxHeight: calculateMaxHeight(index),
              }}
            >
              <div 
                ref={el => answerRefs.current[index] = el}
                className="faq-answer"
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;