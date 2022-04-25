import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadContentfulAC } from "./redux/actions/ContentfulActions";
import { loadUserAC } from "redux/actions/UserActions";
import { getUserLoading } from "redux/selectors/userSelectors";

import MainLayout from "./layouts/MainLayoute";
import MainContent from "./components/Organismes/MainContent";
import { AcceptSnack, Loader } from "components/Atoms";

import { auth } from "./firebase";
import {isAcceptedCookiesLS, LOCAL_STORAGE_FILTERS} from "utils/constants";

import styles from './App.module.scss';

const App: React.FC= () => {
  const dispatch = useDispatch()
  const [isAccepted, setIsAccepted] = useState(localStorage.getItem(isAcceptedCookiesLS))

  useEffect(() => {
    dispatch(loadContentfulAC())
  }, [])

  useEffect(() => {
    localStorage.removeItem(LOCAL_STORAGE_FILTERS.SEX);
    localStorage.removeItem(LOCAL_STORAGE_FILTERS.STATUS);
  }, [])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      dispatch(loadUserAC(user!))
    })

    return unsubscribe
  }, [dispatch])

  const isLoading = useSelector(getUserLoading);

  const renderContent = () => {
    if(isLoading) {
      return <div className={styles.loader}><Loader/></div>
    } else {
      return <MainLayout><MainContent /></MainLayout>
    }
  }
  return (
    <div className="App">
      {renderContent()}
      {!isAccepted && <AcceptSnack setIsAccepted={setIsAccepted} />}
    </div>
  )
}

export default App;
