import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../redux/store';
import NavigationComponent from './NavigationComponent';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationComponent />
    </Provider>
  );
};

export default App;
