import { useSelector } from "react-redux";

import "./App.css";

import { MainLayout } from "./layouts/MainLayoute";
import ContentList from "./components/Molecules/ContentList";
import { ErrorComponent } from "./components/Atoms/ErrorComponent/ErrorComponent";


const App = () => {
  const store = useSelector(store => store)
  return (
    <div className="App">
      <MainLayout className="main-app">
        <div>
          <div className='content'>
            <h1>Simple content list</h1>
            {!store.isError ? <ContentList characters={store?.heroes} /> : <ErrorComponent />}
          </div>
        </div>
      </MainLayout>
    </div>
  )
}

export default App;
