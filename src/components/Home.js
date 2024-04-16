// Home.js
import React, { useState, useEffect } from 'react';
import {ReactTyped} from 'react-typed';
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
        <p className="heading">Welcome to Klife Photos</p>
            <div className="heading-name">{" "}
        <ReactTyped
          strings={["A picture is worth a thousand words",
          "Every moment of your life is beautiful",
          "Capture life's priceless moments",
          "WE ARE KLIFE Photos"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          
          
        />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
