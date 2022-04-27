import React, { useState } from 'react';

import './App.css';
import { Provider } from 'react-redux';

import { SideBarManageButton } from './components/atoms/SideBarManageButton';
import MainLayout from './components/layouts/MainLayout';
import SideBarLayout from './components/layouts/SideBarLayout';
import CardList from './components/organisms/Cardlist';
import Filters from './components/organisms/Filters';
import { store } from './redux';

function App() {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);

  return (
    <Provider store={store}>
      <MainLayout>
        {isOpenSideBar && <SideBarLayout><Filters /></SideBarLayout>}
        <SideBarManageButton
          manageHandler={() => setIsOpenSideBar(!isOpenSideBar)}
          isOpenSideBar={isOpenSideBar}
        />
        <CardList />
      </MainLayout>
    </Provider>
  );
}

export default App;
