import React, {useEffect, useRef, useState} from 'react';
import {RootReducer} from "./redux/reducers";
import {useDispatch, useSelector} from 'react-redux';
import {signInAuth} from "./redux/actions";

import { Header } from 'components/organisms';
import {Content} from "./components/molecules/Content";
import {ErrorComponent} from "./components/atoms/ErrorComponent";
import {Authentication} from "./components/molecules/Authentication";
//@ts-ignore
import Loader from "react-js-loader";

import styles from './App.scss';


function App () {

  const [authVisible, setAuthVisible] = useState<boolean>(false);

  const [emailHeader, setEmailHeader] = useState<string>('');

  const [logIn, setLogIn] = useState<boolean>(false);

  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const {characters, error, charactersLoader, info} = useSelector((state: RootReducer) => state.characters)

  const dataEpisodes = useSelector((state: RootReducer) => state.episodes)

  const dispatch = useDispatch()

  const toggleVisible = () => {
    if(logIn) {
      setAuthVisible(false)
      setLogIn(false)
      dispatch(signInAuth({email: ''}))
      setEmailHeader('')
    } else {
      setAuthVisible(true)
    }
  }

  useEffect(() => {
    if(localStorage.getItem('login')) {
      setEmailHeader(JSON.parse(localStorage.getItem(localStorage.getItem('login')!)!).email)
      setLogIn(true)
    }
  }, [])

  return (
    <>
      <Header inputRef={inputRef} emailHeader={emailHeader} logIn={logIn} toggleVisible={toggleVisible}/>
      <h1 className={styles.h1}>Rick and Morty</h1>
        {error &&
            <ErrorComponent/>
        }
        {charactersLoader ?
            <div style={{marginTop: '200px'}}>
              <Loader type="spinner-cub" bgColor={"#FFFFFF"} color={'aquamarine'} size={300} />
            </div>
            :
            <Content inputRef={inputRef} data={characters} info={info} dataEpisodes={dataEpisodes} />
        }
        {authVisible &&
          <Authentication onClose={() => setAuthVisible(false)} setEmailHeader={setEmailHeader} setLogIn={setLogIn}/>}
    </>
  );
}

export default App;


