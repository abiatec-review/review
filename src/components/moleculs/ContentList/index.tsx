import { Link } from 'react-router-dom';
import NothingFound from 'components/atoms/NothingFound';
import { RouterPath } from 'utils/constants';
import { PictureType } from 'types';

interface IProps {
    characters: PictureType[]
}
const ContentList: React.FC<IProps> = ({ characters }) => {
    const items = characters?.map(character => (
            <li key={character.id} className='mx-[30px] '>
                <Link to={`${RouterPath.Info}${character.id}`} >
                    <figure className='w-[300px] '>
                        <img
                            className='m-auto'
                            src={character.image} alt={`${character.name} character`} />
                        <figcaption>{character.name}</figcaption>
                    </figure>
                </Link>
            </li>
        )
    );

    return (
        <>
            {!!characters.length ?
                <ul className='flex flex-wrap w-[1440px] '>
                    {items}
                </ul>
                :
                <NothingFound/>
            }
        </>
    );
}


export default ContentList;