import React from 'react';
import { IImage } from './types';

const Image: React.FC<IImage> = ({ src, alt }) => {
  console.log('Image');
  return (
    <img src={src} alt={alt} className="select-none p-5" />
  );
};

export default Image;
