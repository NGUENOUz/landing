import React from 'react';
import Multislide from './multislide'; 
// Assurez-vous que le chemin est correct

const MyComponent: React.FC = () => {
  const topSliderImages = [
    'https://res.cloudinary.com/dsf8rehsq/image/upload/v1743077822/pp1_jlolhg.png',
    'https://res.cloudinary.com/dsf8rehsq/image/upload/v1743077526/pp4_nxhl5h.png',
    'https://res.cloudinary.com/dsf8rehsq/image/upload/v1743077218/pp2_padqbj.png',
    'https://res.cloudinary.com/dsf8rehsq/image/upload/v1743076804/pp3_yrerlu.png'
    
  ];

  const bottomSliderImages = [
    'https://res.cloudinary.com/dsf8rehsq/image/upload/v1743077822/pp1_jlolhg.png',
    'https://res.cloudinary.com/dsf8rehsq/image/upload/v1743077526/pp4_nxhl5h.png',
    'https://res.cloudinary.com/dsf8rehsq/image/upload/v1743077218/pp2_padqbj.png',
    'https://res.cloudinary.com/dsf8rehsq/image/upload/v1743076804/pp3_yrerlu.png'
    
  ];

  return <Multislide topSliderImages={topSliderImages} bottomSliderImages={bottomSliderImages} />;
};

export default MyComponent;