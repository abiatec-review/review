import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from 'redux/store';
import { ActionType } from 'redux/actions/actionType';
import App from 'App';

import 'index.css';

store.dispatch({ type: ActionType.FetchPictures, payload: '' });

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root')
);