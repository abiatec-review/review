import React from 'react';

import './App.css';
import { Provider } from 'react-redux';

import MainLayout from './components/layouts/MainLayout';
import CardList from './components/organisms/Cardlist';
import { store } from './redux';

function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <CardList />
      </MainLayout>
    </Provider>
  );
}

export default App;
