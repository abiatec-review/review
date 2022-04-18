import { TitleText } from 'components/atoms'
import { Card } from 'components/molecules'
import { useEffect, useRef } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getCharactersByPage } from 'redux/actions/characters'
import styles from './styles.module.scss'

interface IProps {

}

export const Main: React.FC<IProps> = () => {
  const {charactersList, error, pagesInfo} = useSelector((state: RootStateOrAny) => state.characters);
  const dispatch = useDispatch();
  
  // INFINITY SCROLL IMPLEMENTATION
  // window.onscroll = () => {
  //   if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
  //     if (pagesInfo.next) {
  //       dispatch(getCharactersByPage(pagesInfo.next)) 
  //     }
  //   }
  // }

  

  return ( 
    <div className={styles.mainContaier}>
      <TitleText className={styles.mainTitle} titleText='Result list'/>
      <div id={'cardContainer'} className={styles.cardContainer}>
        {!error ? charactersList?.map((char: any) => {
          return <Card key={char.id} titleText={char.name} srcImage={char.image} />
        }): ''}
      </div>
    </div>
  )
}