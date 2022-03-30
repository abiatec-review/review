import { IContentItem } from '../../Atoms/ContentItem'
import './index.css'

interface IProps {
  characters: IContentItem[];
  setSelectedHeroId: (id: string) => void
}

const ContentList: React.FC<IProps>= ({characters, setSelectedHeroId}) => {
    return (
        <ul className="list">
            {characters.map((character: IContentItem) => {
            return <div key={character.id} onClick={() => setSelectedHeroId(character.id)} className='fragment'>
                <img src={character.image} alt={`${character.name} character`}/>
                <div>{character.name}</div>
            </div>
        })}
        </ul>
    )
}


export default ContentList;
