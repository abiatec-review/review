import React, {
  FC, useCallback, useEffect, useState,
} from 'react';

import { useDispatch } from 'react-redux';

import { fetchEpisodesAction } from '../../../redux/actions/episodes';
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
    dispatch(fetchEpisodesAction(cardData.episode));
  }, []);

  const openTabHandler = (id: number) => () => setOpenTab(id);

  const chooseTabInfo = useCallback(() => {
    switch (openTab) {
      case 1: {
        return (
          <CardInfo cardData={cardData} />
        );
      }
      case 2: {
        return (
          <EpisodeInfo />
        );
      }
    }
  }, [openTab]);

  return (
    <div className={styles.tabsStyle}>
      <TabsButtonBlock tabsInfo={tabsInfo} openTab={openTab} openTabHandler={openTabHandler} />
      {chooseTabInfo()}
    </div>
  );
};

export default Tabs;
