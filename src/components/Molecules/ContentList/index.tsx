import { IContentItem } from '../../../redux/reducers/HeroesReducer/types';
import {ContentItem} from '../../Atoms'
import styles from './index.module.scss'
interface IProps {
  characters: IContentItem[];
  setSelectedHeroId: (id: string) => void
}

const ContentList: React.FC<IProps>= ({characters, setSelectedHeroId}) => {
    return (
        <ul className={styles.list}>
            {characters.map((character: IContentItem) => {
              return <ContentItem 
                        key={character.id} 
                        image={character.image}
                        name={character.name}
                        id={character.id}
                        setSelectedHeroId={setSelectedHeroId}
                      />
        })}
        </ul>
    )
}

export default ContentList;
