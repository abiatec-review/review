import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { getDetails } from 'redux/selectors/details';
import { resetDetails, fetchDetails } from 'redux/actions/details';
import {Spinner} from 'components/atoms';

interface DetailsTabProps {
  episodes: string[]
}


const DetailsTab = ({ episodes }: DetailsTabProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { episodesInfo, charactersPictures, isLoaded, loadedWithError } = useSelector(getDetails);


  useEffect(() => {

    dispatch(fetchDetails(episodes));

    return () => {
      dispatch(resetDetails());
    };

  }, []);


  if (loadedWithError) {
    toast.error('Something went wrong!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate(-1);
  }

  return (
    <div>
      {!isLoaded ? 
      <Spinner/>
      
      :
        <ul>
          {episodes.map((episode) => (
            <li key={episode} className='flex justify-between'>
              <span className="w-[150px]">
                {episodesInfo[episode].name}
                <br />
                {episodesInfo[episode].date}
              </span>
              <span>
                {episode}
              </span>
              <span className='flex'>
                {episodesInfo[episode].characters.map((picture: any) => (
                  <img className='mx-4 h-[40px]' key={picture} src={charactersPictures[picture]} alt="" width="40px" height="40px" />
                ))}
              </span>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default DetailsTab;
