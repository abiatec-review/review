import React, { FC } from 'react';

import Header from '../../moleculs/Header';

const MainLayout: FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default MainLayout;
