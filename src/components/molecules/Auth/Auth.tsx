import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../../firebase';
import Modal from '../Modal/Modal';
import AuthModal from './AuthModal/AuthModal';
import styles from './Auth.module.scss';
import Button from '../../atoms/Button/Button';

const Auth = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser !== null && !user) {
      setUser(currentUser);
    }
  });

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <>
      {user ?
        <div className={styles.userInfo}>
          <p>{user.email}</p>
          <Button handleClick={logout}>Logout</Button>
        </div> :
        <div onClick={() => setIsModalActive(true)}>
          Login
        </div>
      }
      {isModalActive &&
      <Modal setIsActive={setIsModalActive} isActive={isModalActive}>
        <AuthModal modalControl={setIsModalActive} />
      </Modal>}
    </>
  );
};

export default Auth;