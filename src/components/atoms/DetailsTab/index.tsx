import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { getDetails } from 'redux/selectors/details';
import { resetDetails, fetchDetails } from 'redux/actions/details';
import { Spinner } from 'components/atoms';

interface DetailsTabProps {
  episodes: string[]
}

const styles = {
  details__item: `flex justify-between`,
  details__item_name: `w-[150px]`,
  details__item_episode: `flex`,
  details__item_episode_img: `mx-4 h-[40px]`
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
  const getItems = useMemo(() => (episodes: string[]) => {
    return (episodes.map((episode) => (
      <li key={episode} className={styles.details__item}>
        <span className={styles.details__item_name}>
          {episodesInfo[episode].name}
          <br />
          {episodesInfo[episode].date}
        </span>
        <span>
          {episode}
        </span>
        <span className={styles.details__item_episode}>
          {episodesInfo[episode].characters.map((picture: any) => (
            <img className={styles.details__item_episode_img} key={picture} src={charactersPictures[picture]} alt={charactersPictures[picture]} width="40px" height="40px" />
          ))}
        </span>
      </li>
    )));
  }, [episodesInfo])

  return (
    <div>
      {!isLoaded ?
        <Spinner />
        :
        <ul>
          {getItems(episodes)}
        </ul>
      }
    </div>
  );
}

export default DetailsTab;
