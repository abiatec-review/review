import React, {useEffect, useRef, useState} from 'react';
import {RootReducer} from "./redux/reducers";
import {useDispatch, useSelector} from 'react-redux';
import {signInAuth} from "./redux/actions";

import { Header } from 'components/organisms';
import {Content} from "./components/organisms/Content";
import {ErrorComponent} from "./components/atoms/ErrorComponent";
import {Authentication} from "./components/molecules/Authentication";
import {FilterModal} from "./components/molecules/FilterModal";
import {FilterButton} from "./components/atoms/FilterButton";
import {SortComponent} from "./components/molecules/SortComponent";
import {TCharacter} from "./models/character";
//@ts-ignore
import Loader from "react-js-loader";

import styles from './App.scss';


function App () {

  const [authVisible, setAuthVisible] = useState<boolean>(false);

  const [filterVisible, setFilterVisible] = useState<boolean>(false);

  const [emailHeader, setEmailHeader] = useState<string>('');

  const [logIn, setLogIn] = useState<boolean>(false);

  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const {characters, error, charactersLoader, info} = useSelector((state: RootReducer) => state.characters)

  const dispatch = useDispatch()

  const [checkedName, setCheckedName] = useState<boolean>(false)
  const [checkedLocation, setCheckedLocation] = useState<boolean>(false)

  const [filterGender, setFilterGender] = useState('')
  const [filterStatus, setFilterStatus] = useState('')

  const filter = {
        gender: filterGender,
        status: filterStatus
    }

    const charactersProps = filterGender || filterStatus ? characters.filter((item: TCharacter<string>) => {
            if (filter.gender && !filter.status) {
                return item.gender === filter.gender
            } else
            if (!filter.gender && filter.status) {
                return item.status === filter.status
            } else
            if (filter.status && filter.gender) {
                return item.gender === filter.gender && item.status === filter.status
            }
            return item
        })

        : characters

    useEffect(() => {
        if(localStorage.getItem('login')) {
            setEmailHeader(JSON.parse(localStorage.getItem(localStorage.getItem('login')!)!).email)
            setLogIn(true)
        }
    }, [])

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

  const showFilter = (b: boolean) => {
    setFilterVisible(prev => !prev)
  }


  return (
    <>
      <Header inputRef={inputRef} emailHeader={emailHeader} setFilterVisible={setFilterVisible} logIn={logIn} toggleVisible={toggleVisible}
              setCheckedName={setCheckedName} setCheckedLocation={setCheckedLocation}/>
      <h1 className={styles.h1}>Rick and Morty</h1>
      <SortComponent checkedName={checkedName} setCheckedName={setCheckedName} checkedLocation={checkedLocation} setCheckedLocation={setCheckedLocation}/>
      <FilterButton onOpen={() => showFilter(true)}/>
      {filterVisible &&
              <FilterModal
                  filterGender={filterGender}
                  filterStatus={filterStatus}
                  setFilterGender={setFilterGender}
                  setFilterStatus={setFilterStatus}
                  onClose={()=> showFilter(true)}
              />
      }
        {error &&
            <ErrorComponent/>
        }
        {charactersLoader ?
            <div style={{marginTop: '200px'}}>
              <Loader type="spinner-cub" bgColor={"#FFFFFF"} color={'aquamarine'} size={300} />
            </div>
            :
            <>
            <Content inputRef={inputRef} data={charactersProps}
                     info={info} />
            </>
        }
        {authVisible &&
          <Authentication onClose={() => setAuthVisible(false)} setEmailHeader={setEmailHeader} setLogIn={setLogIn}/>
        }
    </>
  );
}

export default App;


