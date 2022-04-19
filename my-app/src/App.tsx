import configureStore from './redux/store'

import { Provider} from "react-redux";

import { Main } from "components/organisms";
import { Sitelayout } from "./layouts/sitelayout"; 


const store = configureStore();
 
 const App = () =>  {

  return (
    <Provider store={store}>
      <Sitelayout>
        <Main/>
      </Sitelayout>
    </Provider>  
  );
}

export default App;
