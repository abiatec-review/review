import React, { FC } from 'react';

import { CardInfoItem } from '../../atoms';
import { CardInfoProps } from './type';

const styles = {
  cardInfoStyle: 'w-1/2',
};

const requireFields: string[] = ['name', 'status', 'species', 'gender'];

const CardInfo: FC<CardInfoProps> = ({ cardData }) => {
  const {
    location: {
      name,
    },
  } = cardData;

  return (
    <ul className={styles.cardInfoStyle}>
      {requireFields.map((item) => (
        <CardInfoItem
          key={item}
          field={item.toUpperCase()}
          data={cardData[item as keyof typeof cardData]}
        />
      ))}
      <CardInfoItem
        field={'location'.toUpperCase()}
        data={name}
      />
    </ul>
  );
};

export default CardInfo;
