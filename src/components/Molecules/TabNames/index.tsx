import React from 'react';

import { Tab } from 'components/Atoms';
import { ITabNames, TabNameType } from 'Molecules/types';

import { TabNamesStyles } from './styles.tailwind';

export const TabNames: React.FC<ITabNames> = ({ tabsNames, clickHandler }) => (
  <div className={`${TabNamesStyles}`}>
    {tabsNames.map((el:TabNameType) => (<Tab key={`${el.name}-tabKey`} active={el.isActive} text={el.name} clickHandler={() => { clickHandler(el.number); }} />))}
  </div>
);
