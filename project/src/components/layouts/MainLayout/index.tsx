import React, { FC } from 'react';

import Header from '../../organisms/Header';

const MainLayout: FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default MainLayout;
