import React from "react";

import {Button, Picture} from "../../atoms";
import { SearchBox } from "../../molecules";
import styles from './styles.module.scss'
import {constants} from '../../../utils/constants'
import {useNavigate} from "react-router-dom";

interface IProps {
    children?: JSX.Element
  inputValue?: string
  onChangeHandler?: any
  getCharactersHandler?: (event:any)=>void
}

export const Header: React.FC<IProps> = ( {inputValue, onChangeHandler,getCharactersHandler, children} ) => {

    const navigate = useNavigate()

    const toSignInButton = () => {
        navigate('/signin')
    }

    return (
    <div className={styles.header}>
      <Picture type={constants.HEADER_PICTURE} srcImage={""}/>
        <Button handleClick={toSignInButton} className={styles.headerNavButton} type={'button'} buttonName={'CLICK ME'}/>
        {children}
    </div>
  )
} 