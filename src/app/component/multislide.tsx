import React from 'react';
import '../../style/multislide.scss'

interface MultislideProps {
  topSliderImages: string[];
  bottomSliderImages: string[];
}

const Multislide: React.FC<MultislideProps> = ({ topSliderImages, bottomSliderImages }) => {


  return (
    <div className="slider-container">
      {/* Slider du haut */}
      <div className="slider">
        <div className="slide-track">
          {/* Premier groupe de slides */}
          {topSliderImages.map((imageUrl, index) => (
            <div className="slide" key={`top-slide-${index}`}>
              <img src={imageUrl} alt={`Slide ${index + 1}`} loading="lazy" />
            </div>
          ))}
          {/* Deuxième groupe de slides pour l'effet infini */}
          {topSliderImages.map((imageUrl, index) => (
            <div className="slide" key={`top-slide-duplicate-${index}`}>
              <img src={imageUrl} alt={`Slide ${index + 1} (duplicate)`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Slider du bas */}
      <div className="slider">
        <div className="slide-track-reverse">
          {/* Premier groupe de slides */}
          {bottomSliderImages.map((imageUrl, index) => (
            <div className="slide" key={`bottom-slide-${index}`}>
              <img src={imageUrl} alt={`Slide ${index + 1}`} loading="lazy" />
            </div>
          ))}
          {/* Deuxième groupe de slides pour l'effet infini */}
          {bottomSliderImages.map((imageUrl, index) => (
            <div className="slide" key={`bottom-slide-duplicate-${index}`}>
              <img src={imageUrl} alt={`Slide ${index + 1} (duplicate)`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Multislide;