import React, {useRef} from 'react';
import {RootReducer} from "./redux/reducers";
import {useSelector} from 'react-redux';
import { Header } from 'components/organisms';
import {Content} from "./components/molecules/Content";
//@ts-ignore
import Loader from "react-js-loader";
import styles from './App.scss';
import {ErrorComponent} from "./components/atoms/ErrorComponent";



function App () {

  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const {characters, error, charactersLoader, info} = useSelector((state: RootReducer) => state.characters)

  const dataEpisodes = useSelector((state: RootReducer) => state.episodes)

  return (
    <>
    <Header inputRef={inputRef}/>
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
    </>
  );
}

export default App;


