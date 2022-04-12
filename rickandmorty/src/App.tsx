import React, {useState} from 'react';

// @ts-ignore
import styles from './App.scss';
import {useSelector} from 'react-redux';

import { Header } from 'components/organisms';
import {Content} from "./components/molecules/Content";

function App() {

  const [visible, setVisible] = useState(8)

  // @ts-ignore
  const data = useSelector(state => state.characters)


  return (
    <>
    <Header setVisible={setVisible}/>
    <h1 className={styles.h1}>Simple content list</h1>
      <Content data={data} visible={visible} setVisible={setVisible} />
    </>
  );
}

export default App;
