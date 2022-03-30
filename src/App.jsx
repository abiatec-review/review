import { useSelector } from "react-redux";

import "./App.css";

import { MainLayout } from "./layouts/MainLayoute";
import ContentList from "./components/Molecules/ContentList";
import { ErrorComponent } from "./components/Atoms/ErrorComponent/ErrorComponent";
import { Loader } from "./components/Atoms/Loader/Loader";


const App = () => {
  const store = useSelector(store => store)

  const searchResult = !store.isError ? <ContentList characters={store?.heroes} /> : <ErrorComponent />
  return (
    <div className="App">
      <MainLayout className="main-app">
        <div>
          <div className='content'>
            <h1>Simple content list</h1>
            { store.isLoading ? <Loader /> : searchResult}
          </div>
        </div>
      </MainLayout>
    </div>
  )
}

export default App;
