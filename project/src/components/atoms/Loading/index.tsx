import React, { FC } from 'react';

const styles = {
  loadingStyle: 'text-center text-2xl',
};

const Loading: FC = () => (
  <div className={styles.loadingStyle}>Loading...</div>
);

export default Loading;
