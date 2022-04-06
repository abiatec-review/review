import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'redux&saga';

import { TabNames } from 'components/Molecules';
import { ITabsComponent } from 'Organism/types';

const TabsComponent: React.FC<ITabsComponent> = ({ arrOfTabsData }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const getTabsNames = () => arrOfTabsData.map((el, i) => ({ name: el.name, number: i, isActive: i === currentTab }));

  const modalWindowStatus = useSelector((state: RootState) => state.modal.isOpen);

  useEffect(() => { setCurrentTab(0); }, [modalWindowStatus]);

  return (
    <div className="grid">
      <TabNames tabsNames={getTabsNames()} clickHandler={(num: number) => { setCurrentTab(num); }} />
      {arrOfTabsData[currentTab].tabContent}
    </div>
  );
};

export default TabsComponent;
