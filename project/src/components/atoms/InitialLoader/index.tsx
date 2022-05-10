import React, { FC } from 'react';

const styles = {
  circleStyle: 'h-5 w-5 bg-input-color rounded-full',
  loaderWrapper: 'flex justify-center',
};

export const InitialLoader: FC = () => (
  <div className={styles.loaderWrapper}>
    <div className={`${styles.circleStyle} mr-1 animate-bounce`} />
    <div className={`${styles.circleStyle} mr-1 animate-bounce200`} />
    <div className={`${styles.circleStyle} animate-bounce400`} />
  </div>
);
