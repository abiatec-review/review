import React, { FC, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { EpisodesActionTypes } from '../../../redux/actions/episodes';
import CardInfo from '../../moleculs/CardInfo';
import EpisodeInfo from '../../moleculs/EpisodeInfo';
import TabsButtonBlock from '../../moleculs/TabsButtonBlock';
import { TabsProps } from './type';

const styles = {
  tabsStyle: 'w-full flex flex-col items-center justify-center',
};

const tabsInfo = [
  { tabName: 'Hero Info', id: 1 },
  { tabName: 'Episode Info', id: 2 },
];

const Tabs: FC<TabsProps> = ({ cardData }) => {
  const [openTab, setOpenTab] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: EpisodesActionTypes.FETCH_EPISODES,
      payload: cardData.episode,
    });
  }, []);

  const openTabHandler = (id: number) => {
    setOpenTab(id);
  };

  return (
    <div className={styles.tabsStyle}>
      <TabsButtonBlock tabsInfo={tabsInfo} openTab={openTab} openTabHandler={openTabHandler} />
      {(openTab === 1) ? (<CardInfo cardData={cardData} />) : (<EpisodeInfo />)}
    </div>
  );
};

export default Tabs;
