// Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
      { src: '/images/image1.jpg' },
    { src: '/images/image2.jpg' },
    { src: '/images/image3.jpg' },
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 8000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div >
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${image.src})` }}
        ></div>
      ))}
      <div className="dark-overlay">
        <div className="home-header">
        <div className="text-content">
          <p className="heading">Welcome to</p>
          <div className="heading-name"><strong>
            Klife Photos</strong>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
