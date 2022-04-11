import { PictureType } from 'types';

interface IProps {
    info: PictureType
};

const styles = {
    infoTab__img: `m-auto`
};


const InfoTab: React.FC<IProps> = ({ info:
    {
        name,
        status,
        species,
        type,
        gender,
        origin,
        location,
        image
    }
}) => {
    return (
        <div>
            <figure >
                <img
                    className={styles.infoTab__img}
                    src={image} alt={`${name} character`} />
                <figcaption>{name}</figcaption>
            </figure>
            <ul>
                {name &&
                    <li>
                        {`name : ${name}`}
                    </li>}
                {status &&
                    <li>
                        {`status : ${status}`}
                    </li>}
                {species &&
                    <li>
                        {`species : ${species}`}
                    </li>}
                {type &&
                    <li>
                        {`type : ${type}`}
                    </li>
                }
                {gender &&
                    <li>
                        {`gender : ${gender}`}
                    </li>}
                {origin && origin.name &&
                    <li>
                        {`origin : ${origin.name}`}
                    </li>}
                {location && location.name &&
                    <li>
                        {`location : ${location.name}`}
                    </li>}

            </ul>
        </div>
    );
}

export default InfoTab;
