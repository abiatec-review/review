import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";

import {Provider} from 'react-redux'
import store from './redux';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
      <CookiesProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </CookiesProvider>
  ,
  document.getElementById('root')
);
