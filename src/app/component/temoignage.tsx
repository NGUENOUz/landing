'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Temoignage() { // Renommer le composant pour une meilleure clarté
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className="sliders">
        <div className='temoignage__cart'>
          
        </div>
        <div className='temoignage__cart'>
          
        </div>
        <div className='temoignage__cart'>
          
        </div>
        <div className='temoignage__cart'>
          
        </div>
        <div className='temoignage__cart'>
          
        </div>
        <div className='temoignage__cart'>
          
        </div>
      </Slider>
    </div>
  );
}