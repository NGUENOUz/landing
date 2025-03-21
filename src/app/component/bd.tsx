import React from 'react';
import Multislide from './multislide'; // Assurez-vous que le chemin est correct

const MyComponent: React.FC = () => {
  const topSliderImages = [
    'https://d1yei2z3i6k35z.cloudfront.net/1970629/67b9cc471cdde_KendrickLamarsuperBowlV5.jpg',
    'https://d1yei2z3i6k35z.cloudfront.net/1970629/67b9cd67b7cf9_7erreursaeviterb.jpg',
    'https://d1yei2z3i6k35z.cloudfront.net/1970629/67b1aaa1b66c5_Jour910pro.jpg',
    'https://d1yei2z3i6k35z.cloudfront.net/1970629/67b9ce1840f63_2.Pourquoijenachetepasdetfsmallcaps9.jpg',
    'https://d1yei2z3i6k35z.cloudfront.net/1970629/67b1aa97eadca_2.Diddy1124.jpg',
    'https://d1yei2z3i6k35z.cloudfront.net/1970629/67b9cefb5faae_EbonyvsMarineB.jpg',
  ];

  const bottomSliderImages = [
    'https://d1yei2z3i6k35z.cloudfront.net/1970629/67b1aa692e566_Dowloadapp.jpg',
    'https://d1yei2z3i6k35z.cloudfront.net/1970629/67b1aa7079abe_8eurreurslvationslatralesB.jpg',
    'https://d1yei2z3i6k35z.cloudfront.net/1970629/67b1aaddbbc09_WarrenBuffett.jpg',
    'https://d1yei2z3i6k35z.cloudfront.net/1970629/67b1aa7bf1570_RealiseruneminiaturestylepodcastPRO.jpg',
    'https://d1yei2z3i6k35z.cloudfront.net/1970629/67b310c867ae6_Styleyomidenzel.jpg',
  ];

  return <Multislide topSliderImages={topSliderImages} bottomSliderImages={bottomSliderImages} />;
};

export default MyComponent;