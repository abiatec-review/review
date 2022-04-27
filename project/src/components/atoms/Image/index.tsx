import React, { FC } from 'react';

import { ImageProps } from './type';

const styles = {
  imageStyle: 'rounded-2xl mb-2',
};

export const Image: FC<ImageProps> = ({ link, alt }) => (
  <img
    src={link}
    alt={alt}
    className={styles.imageStyle}
  />

);