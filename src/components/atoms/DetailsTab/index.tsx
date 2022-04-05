import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import api from 'services/api';


interface DetailsTabProps {
  episodes: string[]
}

interface EpisodesInfoInterface {
  url: string,
  name: string,
  date: string,
  characters: string[]
}

interface StringsKeysObjectInterface<T> {[key: string]: T }

type EpState<T,D = Dispatch<SetStateAction<{}>>> = [
  StringsKeysObjectInterface<T>, 
  D
];


const DetailsTab = ({ episodes }: DetailsTabProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [charactersPictures, setCharactersPictures]: EpState<string> = useState({});
  const [episodesInfo, setEpisodesInfo]: EpState<EpisodesInfoInterface> = useState({});


  useEffect(() => {
    const charactersPictures: StringsKeysObjectInterface<string> = {};
    const episodesInfo: StringsKeysObjectInterface<EpisodesInfoInterface> = {};

    const episodesPromises = episodes.map((episode: string) => api.get(episode));

    Promise.all(episodesPromises).then((values) => {
      const episodesInfoList = values.map(({ data }) => {
        const { url, name, air_date, characters } = data;

        episodesInfo[url] = {
          url,
          name,
          date: air_date,
          characters: characters.slice(0, 3)
        };

        return data;
      });

      const charactersList: string[] = Array.from(new Set(episodesInfoList.reduce((acc, episode) => {
        return acc.concat(episode.characters.slice(0, 3));
      }, [])));

      const charactersPicturesPromises = charactersList.map((char) => api.get(char));

      Promise.all(charactersPicturesPromises).then((values) => {
        values.forEach(({ data }) => {
          charactersPictures[data.url] = data.image;
          return data;
        });
        setCharactersPictures(charactersPictures);
        setEpisodesInfo(episodesInfo);
        setIsLoading(false);
      });
    }).catch(() => {
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
    });
  }, []);



  return (
    <div>
      {isLoading ? 'lading ...' :
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
                {episodesInfo[episode].characters.map((picture) => (
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
