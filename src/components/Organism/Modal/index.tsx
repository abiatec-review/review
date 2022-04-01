import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux&saga';
import { modalStyles } from './styles.tailwind';

const Modal: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  console.log(isOpen);
  return (
    <div className={`${modalStyles} ${isOpen || 'hidden'}`}>
      Modal
    </div>
  );
};

export default Modal;
