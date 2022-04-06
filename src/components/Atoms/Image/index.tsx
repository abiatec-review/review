import React from 'react';

import { IImage } from 'Atoms/types';

export const Image: React.FC<IImage> = ({ src, alt, pdd }) => (
  <img src={src} alt={alt} className={`select-none p-${pdd || '5'}`} />
);
