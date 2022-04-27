import React, { FC } from 'react';

const styles = {
  wrapperStyle: 'fixed top-0 left-0 right-0 bottom-0 flex justify-start bg-modal-color',
  contentStyle: 'w-40 h-100vh p-5 bg-white',
};

const SideBarLayout: FC = ({ children }) => (
  <div className={styles.wrapperStyle}>
    <div className={styles.contentStyle}>
      {children}
    </div>
  </div>
);

export default SideBarLayout;
