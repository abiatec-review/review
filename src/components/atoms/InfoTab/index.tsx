import { PictureType } from 'types';

interface IProps {
    info: PictureType
}

const InfoTab: React.FC<IProps> = ({info}) => {
    const { name,
        status,
        species,
        type,
        gender,
        origin,
        location } = info;

    return (
        <div>
            <figure >
                <img
                    className=' m-auto'
                    src={info.image} alt={`${info.name} character`} />
                <figcaption>{info.name}</figcaption>
            </figure>
            <ul>
                <li>
                    {`name : ${name}`}
                </li>
                <li>
                    {`status : ${status}`}
                </li>
                <li>
                    {`species : ${species}`}
                </li>
                {type &&
                    <li>
                        {`type : ${type}`}
                    </li>
                }
                <li>
                    {`gender : ${gender}`}
                </li>
                <li>
                    {`origin : ${origin.name}`}
                </li>
                <li>
                    {`location : ${location.name}`}
                </li>

            </ul>
        </div>
    );
}

export default InfoTab;
