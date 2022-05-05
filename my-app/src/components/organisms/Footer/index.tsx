import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'

import { getCharactersByPageAndName } from 'redux/actions/characters';

import { PagesBox } from 'components/molecules/PagesBox'
import { Picture } from 'components/atoms';

import { constants } from 'utils/constants';
import footerLogo from '../../../images/footer_logo.jpg'

import styles from './styles.module.scss'
import React from "react";

export const Footer: React.FC = ( ) => {
  const {pagesInfo, charName, message} = useSelector((state: RootStateOrAny) => state.characters);
  const dispatch = useDispatch();

  const changePage = (event: any) => {
    dispatch(getCharactersByPageAndName({name: charName, page: event.target.innerText}))
  }

  return ( 
    <div className={(message === 'Success' && pagesInfo.pages > 1) ? styles.footerWithChars : styles.footer}>
      <PagesBox selectPage={changePage} number={pagesInfo.pages}/>
        <Picture type={constants.FOOTER_LOGO} srcImage={footerLogo}/>
    </div>
  )
}