import { RootStateOrAny, useSelector } from 'react-redux'

import { TitleText } from 'components/atoms'
import { Card } from 'components/molecules'

import styles from './styles.module.scss'

export const Main: React.FC = () => {
  const {charactersList, error} = useSelector((state: RootStateOrAny) => state.characters);

  return ( 
    <div className={styles.mainContaier}>
      <TitleText className={styles.mainTitle} titleText='Result list'/>
      <div id={'cardContainer'} className={styles.cardContainer}>
        {!error ? charactersList?.map((char: any) => {
          return <Card key={char.id} titleText={char.name} srcImage={char.image} />
        }): null}
      </div>
    </div>
  )
}