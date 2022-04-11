import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from 'redux/store';
import { ActionType } from 'redux/actions/actionType';
import App from 'App';

import 'index.css';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
    <BrowserRouter>
        <CookiesProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </CookiesProvider>
    </BrowserRouter>
    ,
    document.getElementById('root')
);