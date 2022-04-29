import React from 'react';

interface IImageProps {
  textAlt: string,
  sourceToImg: string,
  className?: string
}

const Image: React.FC<IImageProps> = ({ textAlt, sourceToImg, className }) => (
  <img alt={textAlt || 'image'} src={sourceToImg} className={className} />
);

export default Image;