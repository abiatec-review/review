import { Header } from 'components/organisms';
import React from 'react';
// @ts-ignore
import styles from './App.scss';


function App() {
  return (
    <>
    <Header/>
    <h1 className={styles.h1}>Simple content list</h1>
    </>
  );
}

export default App;
