import React, {useRef, useState} from 'react';
import styles from './App.scss';
import {useSelector} from 'react-redux';
import { Header } from 'components/organisms';
import {Content} from "./components/molecules/Content";



function App () {

  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);
  //@ts-ignore
  const {characters, info} = useSelector(state => state.characters)
  //@ts-ignore
  const dataEpisodes = useSelector(state => state.episodes)


  return (
    <>
    <Header inputRef={inputRef}/>
    <h1 className={styles.h1}>Rick and Morty</h1>
      <Content inputRef={inputRef} data={characters} info={info} dataEpisodes={dataEpisodes} />
    </>
  );
}

export default App;
