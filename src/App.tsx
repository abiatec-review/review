import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadContentfulAC } from "./redux/actions/ContentfulActions";

import MainLayout from "./layouts/MainLayoute";
import MainContent from "./components/Organismes/MainContent";

const App: React.FC= () => {
 const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(loadContentfulAC())
  }, [])
  
  return (
    <div className="App">
      <MainLayout>
        <MainContent />
      </MainLayout>
    </div>
  )
}

export default App;
