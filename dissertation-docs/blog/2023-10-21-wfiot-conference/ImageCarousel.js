import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel';

function ImageCarousel({ images }) {
  const carouselRef = useRef();

  useEffect(() => {
    $(carouselRef.current).slick();
  }, []);

  return (
    <div ref={carouselRef} className="image-carousel">
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
}

export default ImageCarousel; // Export the component
