import React, {
  FC, useCallback, useMemo, useState,
} from 'react';

import { useAuth } from '../../../auth/AuthContext';
import { InitialLoader, SideBarManageButton } from '../../atoms';
import Filters from '../../organisms/Filters';
import Header from '../../organisms/Header';
import SideBarLayout from '../SideBarLayout';

const MainLayout: FC = ({ children }) => {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
  const auth = useAuth();

  return (
    <>
      {auth?.currentUser === undefined
        ? (
          <InitialLoader />
        )
        : (
          <>
            <Header />
            {isOpenSideBar && <SideBarLayout><Filters /></SideBarLayout>}
            {auth?.currentUser
              && (
                <SideBarManageButton
                  manageHandler={() => setIsOpenSideBar(!isOpenSideBar)}
                  isOpenSideBar={isOpenSideBar}
                />
              )}
            {children}
          </>
        )}
    </>
  );
};

export default MainLayout;
