import React from "react";
import configureStore from './redux/store'

import { Provider} from "react-redux";

import { Sitelayout } from "./layouts/sitelayout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SignInlayout} from "./layouts/signinlayout";
import {SignUplayout} from "./layouts/signuplayout";


const store = configureStore();
 
 const App = () =>  {

  return (
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path={'/signin'} element={<SignInlayout />}/>
                <Route path={'/signup'} element={<SignUplayout />}/>
                <Route path={'/'} element={<Sitelayout />}/>
            </Routes>
        </Provider>
    </BrowserRouter>
  );
}

export default App;
