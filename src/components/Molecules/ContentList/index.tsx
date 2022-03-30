import { IContentItem } from '../../Atoms/ContentItem'
interface IProps {
  characters: IContentItem[]
}

const ContentList: React.FC<IProps>= ({characters}) => {
    return (
        <ul>
            {characters.map((character: IContentItem) => {
            return <figure key={character.id}>
                <img src={character.image} alt={`${character.name} character`}/>
                <figcaption>{character.name}</figcaption>
            </figure>
        })}
        </ul>
    )
}


export default ContentList;
