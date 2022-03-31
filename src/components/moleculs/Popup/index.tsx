import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams, Navigate, Routes, Route, useLocation, Link } from "react-router-dom";
import DetailsTab from "../../atoms/DetailsTab";
import InfoTab from "../../atoms/InfoTab";



const Popup = (props: any): ReactElement => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { id } = useParams();
    const pictures = useSelector((store: any) => store.currentImages);
    const activePicture = pictures.find((picture: any) => picture.id === Number(id));
    if (!activePicture) {
        return <Navigate to='/' />
    }
    return (
        <div className="absolute top-0 pt-[100px] w-[100%] h-[100%] flex justify-center"
            onClick={(evt) => {
                evt.preventDefault();
                navigate('/');
            }}
        >
            <div className=" h-[600px] w-[800px] bg-[#c7c7c7] text-[#444444]] rounded-[25px] 
             flex flex-col items-center overflow-auto shadow-lg "
                onClick={(evt) => {
                    evt.stopPropagation();
                }}
            >              
                <ul className="flex justify-between w-[200px]">
                    <li className="m-1">
                        <Link to={'./'}>info</Link>
                    </li>
                    <li>
                        <Link to={`./details`}>details</Link>
                    </li>
                </ul>
                <Routes>

                    <Route path={`/`} element={<InfoTab info={activePicture} />} />
                    <Route path={`/details`} element={<DetailsTab info={activePicture}  />} />
                </Routes>
            </div>
        </div>

    );


};

// TODO разобраться с calc 
export default Popup;

