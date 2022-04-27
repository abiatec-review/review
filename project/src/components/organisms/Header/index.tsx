import React, { FC } from 'react';

import InputBlock from '../../moleculs/InputBlock';
import SortSelect from '../../moleculs/SortSelect';

const styles = {
  headerStyles: 'p-12 flex flex-col justify-center items-center fixed top-0 left-0 right-0 rounded-3xl bg-header-color shadow-header-shadow',
};

const Header: FC = () => (
  <header className={styles.headerStyles}>
    <InputBlock />
    <SortSelect />
  </header>
);

export default Header;
