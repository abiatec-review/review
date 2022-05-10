import React, { FC } from 'react';

import { useAuth } from '../../../auth/AuthContext';
import AuthManageButtons from '../../moleculs/AuthManageButtons';
import InputBlock from '../../moleculs/InputBlock';
import SortSelect from '../../moleculs/SortSelect';

const styles = {
  headerStyle: 'py-12 px-40 flex justify-end items-center fixed top-0 left-0 right-0 rounded-3xl bg-header-color shadow-header-shadow',
  inputWrapperStyle: 'flex flex-col items-center',
  authWrapperStyle: 'ml-auto',
  titleStyle: 'mr-auto uppercase',
};

const Header: FC = () => {
  const auth = useAuth();

  return (
    <header className={styles.headerStyle}>
      {auth?.currentUser
        ? (
          <>
            <div className={styles.inputWrapperStyle}>
              <InputBlock />
              <SortSelect />
            </div>
            <div className={styles.authWrapperStyle}>
              <AuthManageButtons userState="in" />
            </div>
          </>
        )
        : (
          <>
            <h1 className={styles.titleStyle}>Rick & Morty</h1>
            <AuthManageButtons userState="out" />
          </>
        )}
    </header>
  );
};

export default Header;
