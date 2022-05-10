import React, { FC } from 'react';

import ReactDOM from 'react-dom';

import ModalLayout from '../../layouts/ModalLayout';
import AuthForm from '../../moleculs/AuthForm';
import { AuthModalProps } from './type';

const styles = {

};

const rootModal = document.getElementById('modal') as HTMLElement;

const AuthModal: FC<AuthModalProps> = ({ closeModal, type }) => ReactDOM.createPortal(
  (
    <ModalLayout closeModal={closeModal} title={type === 'signIn' ? 'Sign In' : 'Sign Out'}>
      <AuthForm type={type} />
    </ModalLayout>
  ),
  rootModal,
);

export default AuthModal;
