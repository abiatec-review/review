import { TitleText } from 'components/atoms'
import { Card } from 'components/molecules'
import { RootStateOrAny, useSelector } from 'react-redux'
import styles from './styles.module.scss'

interface IProps {

}

export const Main: React.FC<IProps> = ( {} ) => {
  const {characters} = useSelector((state: RootStateOrAny) => state)
  console.log(characters)
  return ( 
    <div className={styles.mainContaier}>
      <TitleText className={styles.mainTitle} titleText='Result list'/>
      <div className={styles.cardContainer}>
        {!characters.error ? characters.charactersList.map((char: any) => {
          return <Card key={char.id} titleText={char.name} srcImage={char.image} />
        }): ''}
      </div>
    </div>
  )
}