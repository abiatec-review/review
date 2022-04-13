import React, { FC } from 'react';

import TabButton from '../../atoms/TabButton';
import { TabsButtonBlockProps } from './type';

const styles = {
  tabsButtonBlockStyle: 'w-1/2 mb-4 flex justify-between items-center',
};

const TabsButtonBlock: FC<TabsButtonBlockProps> = ({ tabsInfo, openTab, openTabHandler }) => (
  <ul className={styles.tabsButtonBlockStyle}>
    {tabsInfo.map((item) => (
      <li key={item.id}>
        <TabButton
          tabName={item.tabName}
          id={item.id}
          openTab={openTab}
          openTabHandler={openTabHandler}
        />
      </li>
    ))}
  </ul>
);

export default TabsButtonBlock;
