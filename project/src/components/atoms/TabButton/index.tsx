import React, { FC } from 'react';

import { TabButtonProps } from './type';

const styles = {
  tabButtonStyle: 'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal',
};

const TabButton: FC<TabButtonProps> = ({
  tabName, id, openTab, openTabHandler,
}) => (
  <button
    className={`${styles.tabButtonStyle} ${(id === openTab ? 'bg-card-color' : 'bg-white')}`}
    onClick={() => openTabHandler(id)}
  >
    {tabName}
  </button>
);

export default TabButton;
