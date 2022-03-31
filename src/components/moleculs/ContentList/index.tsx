import { Link } from 'react-router-dom';


interface IProps {
    characters: Array<any>
}
const ContentList: React.FC<IProps> = ({ characters }) => {
    const items = characters.map(character => {
        return (
            <Link to={`/info/${character.id}`} key={character.id}>
                <figure >
                    <img
                        className=" m-auto"
                        src={character.image} alt={`${character.name} character`} />
                    <figcaption>{character.name}</figcaption>
                </figure>
            </Link>
        )
    })

    return (
        <ul>
            {items}
        </ul>
    )
}


export default ContentList;