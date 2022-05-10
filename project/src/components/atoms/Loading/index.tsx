import React, { FC } from 'react';

const styles = {
  loadingStyle: 'text-center text-2xl',
};

export const Loading: FC = () => (
  <div className={styles.loadingStyle}>Loading...</div>
);
