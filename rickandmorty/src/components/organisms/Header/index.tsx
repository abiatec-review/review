import React from "react";

import { SearchInput } from "components/molecules"
import { Image, LogInButton } from "components/atoms"

import {allImages} from "../../atoms/Image";

import styles from './style.module.scss';

interface IProps{
  inputRef: React.RefObject<HTMLInputElement>,
  emailHeader: string,
  logIn: boolean,
  toggleVisible: () => void,
  setFilterVisible: (arg: boolean) => void,
  setCheckedName: (arg: boolean) => void,
  setCheckedLocation: (arg: boolean) => void
}

export const Header:React.FC<IProps> = ({inputRef, setFilterVisible, emailHeader, logIn, toggleVisible, setCheckedName, setCheckedLocation}) => {
  return (
    <header className={styles.Header}>
      <Image type={allImages.LIST} className={styles.Header_logo}/>
      <SearchInput inputRef={inputRef} setFilterVisible={setFilterVisible} setCheckedName={setCheckedName} setCheckedLocation={setCheckedLocation}/>
      <LogInButton toggleVisible={toggleVisible} emailHeader={emailHeader} logIn={logIn}/>
    </header>
  )
}
