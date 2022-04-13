import React, { FC } from 'react';

import { CardTitleProps } from './type';

const styles = {
  titleStyle: 'text-center text-2xl',
};

const CardTitle: FC<CardTitleProps> = ({ title }) => (
  <h2 className={styles.titleStyle}>{title}</h2>
);

export default CardTitle;
