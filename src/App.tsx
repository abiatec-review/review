import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadContentfulAC } from "./redux/actions/ContentfulActions";

import MainLayout from "./layouts/MainLayoute";
import MainContent from "./components/Organismes/MainContent";
import { getUserLoading } from "redux/selectors/userSelectors";
import { Loader } from "components/Atoms";

import styles from './App.module.scss';
import { AccepSnack } from "components/AccepSnack";

const App: React.FC= () => {
 const dispatch = useDispatch()
  const [isAccepted, setIsAccepted] = useState('')
  useEffect(() => {
    dispatch(loadContentfulAC())
  }, [])

  useEffect(() =>{
    setIsAccepted(localStorage.getItem('isAccepted')!)
  }, [isAccepted])
  //@ts-ignore
  const isLoading = useSelector(getUserLoading);
  console.log(isLoading)
  return (
    <div className="App">
      {isLoading ? <div className={styles.loader}>
        <Loader/>
        </div> :  <MainLayout>
        <MainContent />
      </MainLayout>}
      {!isAccepted && <AccepSnack setIsAccepted={setIsAccepted} />}
    </div>
  )
}

export default App;
