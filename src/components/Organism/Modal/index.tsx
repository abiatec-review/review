import { ShadowField } from 'components/Atoms';
import { InfoBlock, EpisodesBlock } from 'components/Molecules';
import { TabsComponent } from 'components/Organism';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux&saga';
import { modalStyles } from './styles.tailwind';

const Modal: React.FC = () => {
  const { isOpen, content } = useSelector((state: RootState) => state.modal);

  return (
    <>
      <div className={`${modalStyles} ${isOpen ? '' : 'hidden'}`}>
        <TabsComponent arrOfTabsData={[
          { name: 'General Info', tabContent: <InfoBlock content={content} /> },
          { name: 'Episodes', tabContent: (<EpisodesBlock episodesArray={content.episode} />) },
        ]}
        />
      </div>
      <ShadowField isVisible={isOpen} />
    </>
  );
};

export default Modal;
