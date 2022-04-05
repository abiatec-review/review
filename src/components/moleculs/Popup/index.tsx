import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams, Navigate, Routes, Route, Link, useLocation } from 'react-router-dom';
import { getPictures } from 'redux/selectors/pictures';
import DetailsTab from 'components/atoms/DetailsTab';
import InfoTab from 'components/atoms/InfoTab';
import { RouterPath } from 'utils/constants';
import { PictureType } from 'types';




const Popup = (): ReactElement => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { id } = useParams();
    const pictures = useSelector(getPictures);
    const activePicture = pictures.find((picture: PictureType) => picture.id === Number(id));
    const closePopup = (evt: React.MouseEvent) => {
        evt.preventDefault();
        navigate(RouterPath.Root);
    }

    if (!activePicture) {
        return <Navigate to={RouterPath.Root} />
    }

    return (
        <div className='top-0 pt-[100px] w-[100%] h-[100%] flex justify-center fixed'
            onClick={closePopup}
        >
            <div className=' h-[600px] w-[800px] bg-[#c7c7c7] text-[#444444]] rounded-[25px] 
             flex flex-col items-center shadow-lg fixed'
                onClick={(evt) => {
                    evt.stopPropagation();
                }}
            >
                <button className='absolute right-[-10px] top-[-10px] z-10000 h-[40px] 
                w-[40px] rounded-full bg-indigo-500 '
                    onClick={closePopup}
                >
                    X
                </button>
                <ul className='flex justify-between w-[200px]'>
                    <li className={`m-1 
                    ${!pathname.endsWith(RouterPath.Details) ? 'underline' : ''}
                   `}
                    >
                        <Link to={`.${RouterPath.Root}`}>info</Link>
                    </li>
                    <li className={`m-1
                     ${pathname.endsWith(RouterPath.Details) ? 'underline' : ''}
                    `}>
                        <Link to={`.${RouterPath.Details}`}>details</Link>
                    </li>
                </ul>
                <div className='overflow-auto w-[100%]'>
                    <Routes>
                        <Route path={RouterPath.Root} element={<InfoTab info={activePicture} />} />
                        <Route path={RouterPath.Details} element={<DetailsTab episodes={activePicture.episode} />} />
                    </Routes>
                </div>

            </div>
        </div>
    );
};

export default Popup;

