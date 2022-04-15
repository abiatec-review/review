import React, {useState} from 'react';

// @ts-ignore
import styles from './App.scss';
import {useSelector} from 'react-redux';

import { Header } from 'components/organisms';
import {Content} from "./components/molecules/Content";

function App() {

  const [visible, setVisible] = useState(10)

  // @ts-ignore
  const data = useSelector(state => state.characters)
  // @ts-ignore
  const dataEpisodes = useSelector(state => state.episodes)




  return (
    <>
    <Header setVisible={setVisible}/>
    <h1 className={styles.h1}>Rick and Morty</h1>
      <Content data={data} dataEpisodes={dataEpisodes} visible={visible} setVisible={setVisible} />
    </>
  );
}

export default App;
