import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadContentfulAC } from "./redux/actions/ContentfulActions";

import MainLayout from "./layouts/MainLayoute";
import MainContent from "./components/Organismes/MainContent";
import { getUserLoading } from "redux/selectors/userSelectors";
import { AcceptSnack, Loader } from "components/Atoms";

import styles from './App.module.scss';


const App: React.FC= () => {
 const dispatch = useDispatch()
  const [isAccepted, setIsAccepted] = useState(localStorage.getItem('isAccepted'))

  useEffect(() => {
    dispatch(loadContentfulAC())
  }, [])

  const isLoading = useSelector(getUserLoading);
  return (
    <div className="App">
      {isLoading ? <div className={styles.loader}>
        <Loader/>
        </div> :  <MainLayout>
        <MainContent />
      </MainLayout>}
      {!isAccepted && <AcceptSnack setIsAccepted={setIsAccepted} />}
    </div>
  )
}

export default App;
