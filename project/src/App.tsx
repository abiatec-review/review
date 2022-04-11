import React from 'react';
import './App.css';
import CardList from './components/organisms/Cardlist';
import MainLayout from './components/layouts/MainLayout';
import { Provider } from 'react-redux';
import { store } from './redux';

function App() {
  return (
    <Provider store={store}>  
      <MainLayout>
        <CardList/>
      </MainLayout>
    </Provider>

  );
}

export default App;
