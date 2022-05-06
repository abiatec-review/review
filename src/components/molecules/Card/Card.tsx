import React, { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { Character } from '../../../models/CharacterReducer';
import { FetchSingleCharacterSuccess } from '../../../store/actions/CharacterActions';
import Image from '../../atoms/Image/Image';
import styles from './Card.module.scss';

interface CardProps {
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>,
  data: Character
}

// eslint-disable-next-line react/display-name
const Card = forwardRef((props: CardProps, ref: any) => {

  const { setIsModalActive, data } = props;
  const { name, image } = data;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(FetchSingleCharacterSuccess(data));
    setIsModalActive(true);
  };

  return (
    <div ref={ref} className={styles.cardWrapper}>
      <Image textAlt={name} sourceToImg={image} handleClick={handleClick} className={styles.imgCard} />
      <p>{name}</p>
    </div>
  );
});

export default Card;