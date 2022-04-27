import React, { FC } from 'react';

import { useTypedSelector } from '../../../utils/hooks/useTypedSelector';
import { Image, Loading } from '../../atoms';
import ModalLayout from '../../layouts/ModalLayout';
import ModalHeader from '../../moleculs/ModalHeader';
import { CharacterModalProps } from './type';

const styles = {
  modalWrapperStyle: 'max-w-xl w-full bg-white rounded-lg p-10 overflow-auto flex flex-col items-center',
  charactersListStyle: 'flex justify-between',
  charactersItemStyle: 'w-full max-w-5/6',
};

const CharactersModal: FC<CharacterModalProps> = ({ closeModal }) => {
  const { characters, loading } = useTypedSelector((state) => state.character);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <ModalLayout>
      <div className={styles.modalWrapperStyle}>
        <ModalHeader closeModal={closeModal} title="Characters of Episode" />
        <ul className={styles.charactersListStyle}>
          {characters.map((item) => (
            <li className={styles.charactersItemStyle} key={item.id}>
              <Image link={item.image} alt={item.name} />
            </li>
          ))}
        </ul>
      </div>
    </ModalLayout>
  );
};

export default CharactersModal;