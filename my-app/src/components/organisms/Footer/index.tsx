import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'

import { getCharactersByPageAndName } from 'redux/actions/characters';

import { PagesBox } from 'components/molecules/PagesBox'
import { Picture } from 'components/atoms';

import { constants } from 'utils/constants';
import footerLogo from '../../../images/footer_logo.jpg'

import styles from './styles.module.scss'

export const Footer: React.FC = ( ) => {
  const {pagesInfo, charName, message} = useSelector((state: RootStateOrAny) => state.characters);
  const dispatch = useDispatch();

  const changePage = (event: any) => {
    dispatch(getCharactersByPageAndName({name: charName, page: event.target.innerText}))
  }

  return ( 
    <div className={message === 'Success' ? styles.footerWithChars : styles.footer}>
      <Picture type={constants.FOOTER_LOGO} srcImage={footerLogo}/>
      <PagesBox selectPage={changePage} number={pagesInfo.pages}/>
    </div>
  )
} 