import React, { useState, useEffect } from 'react';
import bannerImage1 from '../assets/images/girl1.jpg';
import bannerImage2 from '../assets/images/girl2.webp';
import bannerImage3 from '../assets/images/girl3.jpg';
import bannerImage4 from '../assets/images/girl4.jpg';

const images = [
  [bannerImage1, bannerImage2],
  [bannerImage3, bannerImage4],
  // Add more image pairs as needed
];

function Banner() {
  const [currentImages, setCurrentImages] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentImages(images[newIndex]);
      setCurrentIndex(newIndex);
    }, 5000); // Change images every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row relative z-10" style={{ height: '100vh' }}>
      <div
        className="w-full md:w-1/2 bg-cover bg-center transition-all duration-500 z-0"
        style={{ backgroundImage: `url(${currentImages[0]})`, height: '125vh', backgroundSize: 'cover' }}
      >
        
      </div>
      <div
        className="w-full md:w-1/2 bg-cover bg-center transition-all duration-500 z-0"
        style={{ backgroundImage: `url(${currentImages[1]})`, height: '125vh', backgroundSize: 'cover' }}
      >
      </div>

      <div className="absolute top-0 left-15 m-8">
        <h1 className="text-white font-bodoni "style={{ fontSize: '10rem' }}>ZARA</h1>
      </div>
    </div>
  );
}

export default Banner;
