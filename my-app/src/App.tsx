import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { getCharacters } from "redux/actions/characters";
import { Sitelayout } from "./layouts/sitelayout"; 
import configureStore from './redux/store'

const store = configureStore();
 
 const App = () =>  {

  return (
    <Provider store={store}>
      <Sitelayout>
        <div></div>
      </Sitelayout>
    </Provider>  
  );
}

export default App;
