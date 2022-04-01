import { Tab } from 'components/Atoms';
import { ITabNames, TabNameType } from 'Molecules/types';
import React from 'react';
import { TabNamesStyles } from './styles.tailwind';

const TabNames: React.FC<ITabNames> = ({ tabsNames, clickHandler }) => {
  console.log(tabsNames);

  return (
    <div className={`${TabNamesStyles}`}>
      {tabsNames.map((el:TabNameType) => (<Tab key={`${el.name}-tabKey`} active={el.isActive} text={el.name} clickHandler={() => { clickHandler(el.number); }} />))}
    </div>
  );
};

export default TabNames;
