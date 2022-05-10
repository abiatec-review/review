import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../../store/reducers';
import Image from '../../atoms/Image/Image';
import TextDiv from '../../atoms/TextDiv/TextDiv';
import styles from './CharacterDescription.module.scss';

const CharacterDescription = () => {
  const info = useSelector((state: RootReducer) => state.characters.currentCharacter);

  const {
    status,
    species,
    location,
    gender,
    image,
    name,
  } = info;
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.contentLeft}>
        <Image textAlt={name} sourceToImg={image} className={styles.modalImg} />
      </div>
      <div className={styles.contentRight}>
        <TextDiv name='Name' text={name} />
        <TextDiv name='Status' text={status} />
        <TextDiv name='Location' text={location!.name} />
        <TextDiv name='Gender' text={gender} />
        <TextDiv name='Species' text={species} />
      </div>
    </div>
  );
};

export default CharacterDescription;