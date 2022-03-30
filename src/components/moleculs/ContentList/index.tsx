interface IProps {
    characters: Array<any>
}
const ContentList: React.FC<IProps> = ({characters}) => {
    const items = characters.map(character => {
            return <figure key={character.id}>
                <img
                className=" m-auto"
                 src={character.image} alt={`${character.name} character`}/>
                <figcaption>{character.name}</figcaption>
            </figure>
        })

    return (
        <ul>
            {items}
        </ul>
    )
}


export default ContentList;