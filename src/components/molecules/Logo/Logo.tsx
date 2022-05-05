import React from 'react';
import Image from '../../atoms/Image/Image';
import MortyLogo from '../../../assets/LogoMortyHead.png';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div>
      <Image textAlt="Logo" sourceToImg={MortyLogo} className={styles.Logo} />
    </div>
  );
};

export default Logo;