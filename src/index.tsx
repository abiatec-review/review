import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MainPage } from './components/Pages';
import store from './redux';

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('root'),
);
