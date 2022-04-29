import React from 'react';

interface ImageProps {
  textAlt: string,
  sourceToImg: string,
  className?: string,
  handleClick?: () => void
}

const Image: React.FC<ImageProps> = ({ textAlt, sourceToImg, className, handleClick }) => (
  <img alt={textAlt || 'image'} src={sourceToImg} className={className} onClick={handleClick} />
);

export default Image;