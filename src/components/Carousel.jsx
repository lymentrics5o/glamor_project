// src/components/Carousel.js
import React, { useState } from 'react';


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images stored in public/images folder
  const images = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
    '/images/slide4.jpg',
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-center">
      <button className="carousel-button left" onClick={goToPrevious}>❮</button>
      <div className="carousel-images">
        <img src={images[currentIndex]} alt={`carousel ${currentIndex}`} />
      </div>
      <button className="carousel-button right" onClick={goToNext}>❯</button>
    </div>
  );
};

export default Carousel;
