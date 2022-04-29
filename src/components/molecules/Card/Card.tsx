import React, { forwardRef } from 'react';
import Image from '../../atoms/Image/Image';
import styles from './Card.module.scss';

interface CardProps {
  imgUrl: string,
  name: string,
}

// eslint-disable-next-line react/display-name
const Card = forwardRef((props: CardProps, ref: any) => {

  const { imgUrl, name } = props;

  return (
    <div ref={ref} className={styles.cardWrapper}>
      <Image textAlt='Hero Image' sourceToImg={imgUrl} className={styles.imgCard} />
      <p>{name}</p>
    </div>
  );
});

export default Card;