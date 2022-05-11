import React from 'react';

interface MainLayoutProps {
  children: any;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main>{children}</main>
  );
};

export default MainLayout;