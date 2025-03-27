import React from 'react';
import Multislide from './multislide'; 
// Assurez-vous que le chemin est correct

const MyComponent: React.FC = () => {
  const topSliderImages = [
    'https://res.cloudinary.com/dsf8rehsq/image/upload/v1743074737/pp1_zfxxlx.png',
    'https://res.cloudinary.com/dsf8rehsq/image/upload/v1743074737/pp4_l3xcxz.png',
    'https://res.cloudinary.com/dsf8rehsq/image/upload/v1743074736/pp2_ameq2v.png',
    'https://res.cloudinary.com/dsf8rehsq/image/upload/v1743074736/pp3_tvkm1h.png'
    
  ];

  const bottomSliderImages = [
    'https://res.cloudinary.com/dsf8rehsq/image/upload/v1743074737/pp1_zfxxlx.png',
    'https://res.cloudinary.com/dsf8rehsq/image/upload/v1743074737/pp4_l3xcxz.png',
    'https://res.cloudinary.com/dsf8rehsq/image/upload/v1743074736/pp2_ameq2v.png',
    'https://res.cloudinary.com/dsf8rehsq/image/upload/v1743074736/pp3_tvkm1h.png'
    
  ];

  return <Multislide topSliderImages={topSliderImages} bottomSliderImages={bottomSliderImages} />;
};

export default MyComponent;