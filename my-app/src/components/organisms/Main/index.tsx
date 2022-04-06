import { TitleText } from 'components/atoms'
import { Card } from 'components/molecules'
import { useEffect } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import styles from './styles.module.scss'

interface IProps {
  
}

export const Main: React.FC<IProps> = ( {} ) => {
  const characters = useSelector((state: RootStateOrAny) => state.characters.findCharactersList)

  console.log(characters)
  return ( 
    <div className={styles.mainContaier}>
      <TitleText className={styles.mainTitle} titleText='Result list'/>
      <div className={styles.cardContainer}>
        {/* {characters.forEach((char: any) => {
          <Card titleText={char.name}
          srcImage={char.image}/>
        })} */}
      </div>
    </div>
  )
}