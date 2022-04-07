import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";

import {Provider} from 'react-redux'
import store from './redux';
import { AuthProvider } from 'utils/context';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <React.StrictMode>
      <CookiesProvider>
        <Provider store={store}>
        <AuthProvider>
          <App />
          </AuthProvider>
        </Provider>
      </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
