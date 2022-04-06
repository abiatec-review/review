import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux&saga';

import { ShadowField } from 'components/Atoms';
import { InfoBlock, EpisodesBlock } from 'components/Molecules';
import { TabsComponent } from 'components/Organism';
import { clearEpisodesInfoList } from 'redux&saga/actions/episodesActions';
import { hideModal } from 'redux&saga/actions/modalActions';

import { modalStyles } from './styles.tailwind';

export const Modal: React.FC = () => {
  const { isOpen, content } = useSelector((state: RootState) => state.modal);

  const dispatch = useDispatch();

  const closeModalFunction = () => {
    dispatch(hideModal());
    dispatch(clearEpisodesInfoList());
  };

  return (
    <>
      <div className={`modal ${modalStyles} ${isOpen ? '' : 'hidden'}`}>
        <TabsComponent arrOfTabsData={[
          { name: 'General Info', tabContent: <InfoBlock content={content} /> },
          { name: 'Episodes', tabContent: (<EpisodesBlock episodeUrlsArray={content.episode} />) },
        ]}
        />
      </div>
      <ShadowField isVisible={isOpen} closeModalFunction={closeModalFunction} />
    </>
  );
};
