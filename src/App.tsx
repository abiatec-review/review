import "./App.css";

import { MainLayout } from "./layouts/MainLayoute";
import { MainContent } from "./components/Organismes/MainContent";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LOAD_CONTENTFUL } from "./redux/actions/ContentfulActions";

const App: React.FC= () => {
 const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch({type: LOAD_CONTENTFUL})
  }, )
  
  return (
    <div className="App">
      <MainLayout>
        <MainContent />
      </MainLayout>
    </div>
  )
}

export default App;
