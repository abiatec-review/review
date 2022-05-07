import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../../store/reducers';
import Image from '../../atoms/Image/Image';
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
  // TODO: Replace markup logic
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.contentLeft}>
        <Image textAlt={name} sourceToImg={image} className={styles.modalImg} />
      </div>
      <div className={styles.contentRight}>
        <div>
          Name: { name }
        </div>
        <div>
          Status: { status }
        </div>
        <div>
          Location: { location!.name }
        </div>
        <div>
          Gender: { gender }
        </div>
        <div>
          Species: { species }
        </div>
      </div>
    </div>
  );
};

export default CharacterDescription;