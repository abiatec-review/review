import { ShadowField } from 'components/Atoms';
import { InfoBlock } from 'components/Molecules';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux&saga';
import { modalStyles } from './styles.tailwind';

const Modal: React.FC = () => {
  const { isOpen, content } = useSelector((state: RootState) => state.modal);

  console.log(isOpen);
  return (
    <>
      <div className={`${modalStyles} ${isOpen ? '' : 'hidden'}`}>
        <InfoBlock content={content} />
      </div>
      <ShadowField isVisible={isOpen} />
    </>
  );
};

export default Modal;
