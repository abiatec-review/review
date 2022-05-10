import React, { FC, useState } from 'react';

import { useAuth } from '../../../auth/AuthContext';
import { Button } from '../../atoms';
import AuthModal from '../../organisms/AuthModal';
import { AuthManageButtonsProps } from './type';

const styles = {
  buttonStyle: 'ml-4',
};

const AuthManageButtons: FC<AuthManageButtonsProps> = ({ userState }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');
  const auth = useAuth();

  const closeModal = () => setIsOpenModal(false);
  const openModal = (type: string) => () => {
    setModalType(type);
    setIsOpenModal(true);
  };
  const logOut = async () => {
    const res = await auth?.logOut();
  };

  const renderButton = () => {
    switch (userState) {
      case 'out': {
        return (
          <div className="w-52 flex justify-between">
            <Button title="Sign In" clickHandler={openModal('signIn')} />
            <Button title="Sign Up" clickHandler={openModal('signUp')} />
            {isOpenModal && <AuthModal closeModal={closeModal} type={modalType} />}
          </div>
        );
      }
      case 'in': {
        return (
          <Button title="Log Out" clickHandler={logOut} />
        );
      }
    }
  };

  return (
    <>
      {renderButton()}
    </>
  );
};

export default AuthManageButtons;
