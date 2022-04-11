import { Link } from 'react-router-dom';
import { NothingFound } from 'components/atoms';
import { RouterPath } from 'utils/constants';
import { PictureType } from 'types';

interface IProps {
    characters: PictureType[]
}

const styles = {
    contentList: `flex flex-wrap w-[1440px]`,
    contentList__item: `mx-[30px]`,
    character: `w-[300px]`,
    character__img: `m-auto`
}

export const ContentList: React.FC<IProps> = ({ characters }) => {
    const items = characters?.map(character => (
        <li key={character.id} className={styles.contentList__item}>
            <Link to={`${RouterPath.Info}${character.id}`} >
                <figure className={styles.character}>
                    <img
                        className={styles.character__img}
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
                <ul className={styles.contentList}>
                    {items}
                </ul>
                :
                <NothingFound />
            }
        </>
    );
}
