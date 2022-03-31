import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux&saga';

const Modal: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  console.log(isOpen);
  return (
    <div className={`p-5 text-3xl grid justify-center fixed top-[50%] -translate-y-2/4 left-[50%] -translate-x-2/4 w-[70%]  ${isOpen ? '' : 'hidden'} rounded-3xl shadow-3xl bg-white`}>
      Modal
    </div>
  );
};

export default Modal;
