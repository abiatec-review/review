import React from 'react';
import styles from './Header.module.scss';
import Auth from '../../molecules/Auth/Auth';
import Logo from '../../molecules/Logo/Logo';
import SearchInput from '../../molecules/SearchInput/SearchInput';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <SearchInput />
      <Auth />
    </div>
  );
};

export default Header;