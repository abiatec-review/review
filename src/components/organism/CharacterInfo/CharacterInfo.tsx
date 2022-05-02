import React, { useState } from 'react';
import { defaultActiveCharacterTab } from '../../../utils/constants';
import CharacterDescription from '../../molecules/CharacterDescription/CharacterDescription';
import CharacterMoments from '../../molecules/CharacterMoments/CharacterMoments';
import Tabs from '../../molecules/Tabs/Tabs';
// TODO: Divide tabsContainer logic to another component
const CharacterInfo = () => {
  const [currentActiveTab, setCurrentActiveTab] = useState(defaultActiveCharacterTab);

  const characterTabs = [
    { name: 'Info' },
    { name: 'Episodes' },
  ];

  return (
    <div>
      <Tabs tabsControl={setCurrentActiveTab} currentActiveTab={currentActiveTab} availableTabs={characterTabs} />
      <div className='contentWrapper'>
        {currentActiveTab === characterTabs[0].name ? <CharacterDescription /> : null}
        {currentActiveTab === characterTabs[1].name ? <CharacterMoments /> : null}
      </div>
    </div>
  );
};

export default CharacterInfo;