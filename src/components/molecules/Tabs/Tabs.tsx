import React, { SetStateAction } from 'react';
import styles from './Tabs.module.scss';

interface TabsProps {
  tabsControl: React.Dispatch<SetStateAction<string>>,
  currentActiveTab: string,
  availableTabs: {
    name: string
  }[]
}

const Tabs = (props: TabsProps) => {
  const { tabsControl, currentActiveTab, availableTabs } = props;

  const handleClick = (name: string) => {
    tabsControl(name);
  };

  return (
    <div className={styles.tabsWrapper}>
      { availableTabs.map(({ name }) => (
        <div onClick={() => handleClick(name)} key={name} className={currentActiveTab === name ? styles.active : styles.tab}>
          {name}
        </div>
      ))}
    </div>
  );
};

export default Tabs;