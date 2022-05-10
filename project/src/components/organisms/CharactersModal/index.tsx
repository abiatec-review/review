import React, { FC } from 'react';

import { useTypedSelector } from '../../../utils/hooks/useTypedSelector';
import { Image, InitialLoader } from '../../atoms';
import ModalLayout from '../../layouts/ModalLayout';
import { CharacterModalProps } from './type';

const styles = {
  charactersListStyle: 'flex justify-between',
  charactersItemStyle: 'w-full max-w-5/6',
};

const CharactersModal: FC<CharacterModalProps> = ({ closeModal }) => {
  const { characters, loading } = useTypedSelector((state) => state.character);

  if (loading) {
    return (
      <InitialLoader />
    );
  }

  return (
    <ModalLayout closeModal={closeModal} title="Characters of Episode">
      <ul className={styles.charactersListStyle}>
        {characters.map((item) => (
          <li className={styles.charactersItemStyle} key={item.id}>
            <Image link={item.image} alt={item.name} />
          </li>
        ))}
      </ul>
    </ModalLayout>
  );
};

export default CharactersModal;
