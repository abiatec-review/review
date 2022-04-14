import { TitleText } from 'components/atoms'
import { Card } from 'components/molecules'
import { useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.scss'

interface IProps {

}

export const Main: React.FC<IProps> = () => {
  const {charactersList, error, charName} = useSelector((state: RootStateOrAny) => state.characters);
  let charsListForRender = charactersList;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   charactersList?.forEach((element: any) => {
  //     charsListForRender.push(element)
  //     console.log('AAAAAAAAAAAAAAAAAAAa');
  //   })
  // }, [thisPage])

  // const loadMore = () => {
  //   if (thisPage <= 6) {
  //     thisPage++
  //     dispatch(getCharactersPage(2, 'rick'))
  //   }
  // }

  // (() => {
  //   if(document.body.scrollHeight - document.body.scrollTop === document.body.clientHeight) {
  //     loadMore()
  //   }
  // })()

  // (() => {
  //   dispatch(getCharactersPage(2, 'rick'))
  // })()

  return ( 
    <div className={styles.mainContaier}>
      <TitleText className={styles.mainTitle} titleText='Result list'/>
      <div className={styles.cardContainer}>
        {!error ? charsListForRender?.map((char: any) => {
          return <Card key={char.id} titleText={char.name} srcImage={char.image} />
        }): ''}
      </div>
    </div>
  )
}