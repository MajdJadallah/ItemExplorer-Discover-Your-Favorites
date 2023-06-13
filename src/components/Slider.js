import React, { useState } from 'react';
const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  return (
    <div className="slider">
      <button onClick={previousImage}>Previous</button>
      <img src={images[currentImageIndex]} alt="Slider Image" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Slider;
