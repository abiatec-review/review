import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// @ts-ignore
import styles from './App.scss';
import {useSelector} from 'react-redux';
import {ContentList} from "./components/molecules/Content";
import { Header } from 'components/organisms';
import { Modal } from 'components/atoms';

function App() {

  const init = 8;

  const [visible, setVisible] = useState(init)

  // @ts-ignore
  const data = useSelector(state => state.characters)
  console.log(data)


  return (
    <>
      <Router>

    <Header init={init} setVisible={setVisible}/>
    <h1 className={styles.h1}>Simple content list</h1>
      <ContentList visible={visible} setVisible={setVisible}/>

        <Routes>
        <Route exact path="/:id" component={<Modal />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
