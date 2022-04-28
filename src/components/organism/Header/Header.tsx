import React from 'react';
import styles from './Header.module.scss';
import Login from '../../molecules/Login/Login';
import Logo from '../../molecules/Logo/Logo';
import SearchInput from '../../molecules/SearchInput/SearchInput';

const Header = () => {
  console.log('Header');
  return (
    <div className={styles.wrapper}>
      <Logo />
      <SearchInput />
      <Login />
    </div>
  );
};

export default Header;