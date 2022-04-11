import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams, Navigate, Routes, Route, Link, useLocation } from 'react-router-dom';
import { getPictures } from 'redux/selectors/pictures';
import DetailsTab from 'components/atoms/DetailsTab';
import InfoTab from 'components/atoms/InfoTab';
import { RouterPath } from 'utils/constants';
import { PictureType } from 'types';



const styles = {
    popupWrapper: `top-0 pt-[100px] w-full h-full flex justify-center fixed`,
    popup: ` h-[600px] w-[800px] bg-popup_bcground rounded-[25px] 
    flex flex-col items-center shadow-lg fixed`,
    popup__tabs: `flex justify-between w-[200px]`,
    popup__content: `overflow-auto w-full`,
    closeBtn: `absolute right-[-10px] top-[-10px] z-10000 h-[40px] 
    w-[40px] rounded-full bg-indigo-500`,
    character__img: `m-auto`,
    tab: `m-1`
}


export const Popup = (): ReactElement => {
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
        <div className={styles.popupWrapper}
            onClick={closePopup}
        >
            <div className={styles.popup}
                onClick={(evt) => {
                    evt.stopPropagation();
                }}
            >
                <button className={styles.closeBtn}
                    onClick={closePopup}
                >
                    X
                </button>
                <ul className={styles.popup__tabs}>
                    <li className={`${styles.tab} 
                    ${!pathname.endsWith(RouterPath.Details) ? 'underline' : ''}
                   `}
                    >
                        <Link to={`.${RouterPath.Root}`}>info</Link>
                    </li>
                    <li className={`${styles.tab} 
                     ${pathname.endsWith(RouterPath.Details) ? 'underline' : ''}
                    `}>
                        <Link to={`.${RouterPath.Details}`}>details</Link>
                    </li>
                </ul>
                <div className={styles.popup__content}>
                    <Routes>
                        <Route path={RouterPath.Root} element={<InfoTab info={activePicture} />} />
                        <Route path={RouterPath.Details} element={<DetailsTab episodes={activePicture.episode} />} />
                    </Routes>
                </div>

            </div>
        </div>
    );
};


