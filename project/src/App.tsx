import React from 'react';

import './App.css';
import { Provider } from 'react-redux';

import { AuthProvider } from './auth/AuthContext';
import MainLayout from './components/layouts/MainLayout';
import CardList from './components/organisms/Cardlist';
import { store } from './redux';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <MainLayout>
          <CardList />
        </MainLayout>
      </AuthProvider>
    </Provider>
  );
}

export default App;
