import styles from './styles.module.scss'
import { Picture, TitleText } from "components/atoms"
import { constants } from 'utils/constants'

interface IProps {
  srcImage: string
  titleText: string
  }

export const Card: React.FC<IProps> = ( {srcImage, titleText} )=> {

  
    return ( 
      <div>
        <TitleText titleText={titleText} className={styles.cardTitle}/>
        <Picture type={constants.CARD_PICTURE} srcImage={srcImage} />
      </div>
    )
  } 