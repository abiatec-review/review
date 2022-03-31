import { useEffect, useState } from "react";
import api from '../../../services/api';
const DetailsTab = ({ info }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  let { episode } = info;
  // console.log('episode in', episode);
  const [charactersPictures, setCharactersPictures] : [any, any]  = useState({});
  const [episodesInfo, setEpisodesInfo]: [any, any] = useState({});


  useEffect(() => {
    const charactersPictures: any = {};
    const episodesInfo: { [key: string]: any } = {};
    const promises = episode.map((ep: any) => api.get(ep));
    Promise.all(promises).then((values: any) => {
      values = values.map((el: any) => {
        const { url, name, air_date, characters } = el.data;
        episodesInfo[url] = {
          url,
          name,
          date: air_date,
          characters: characters.slice(0, 3)
        }
        return el.data;
      });
      const promises = values.reduce((acc: any, episode: any) => {
        return acc.concat(episode.characters.slice(0, 3).map((char: any) => api.get(char)));
      }, []);
      Promise.all(promises).then((values) => {
        values = values.map((el: any) => {
          charactersPictures[el.data.url] = el.data.image;
          return el.data;
        });
        setCharactersPictures(charactersPictures);
        setEpisodesInfo(episodesInfo);
        setIsLoading(false);


        // console.log('episodes', episodesInfo);
        // console.log('chars', charactersPictures);
      });
    });
  }, []);



  return (
    <div>
      {isLoading ? 'lading ...' :
        <ul>
          {episode.map((ep: any) => (
            <li key={ep} className='flex justify-between'>
              <span className="w-[150px]">
                  {episodesInfo[ep].name}
                <br />
                {episodesInfo[ep].date}
              </span>
              <span>
                  {ep}
              </span>
              <span className='flex'>
                  {episodesInfo[ep].characters.map((picture : any) => (
                    <img className='mx-4 h-[40px]' src={charactersPictures[picture]} alt="" width="40px" height="40px"/>
                  ))}
              </span>
            </li>
          ))}

        </ul>
      }
      {/* <ul>
            {episode.map((el:any) => (
                <li>
                  <span>

                  </span>
                  {el}
                </li>
            ))}
        </ul> */}
    </div>
  );
}

export default DetailsTab;

/*

{
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1'
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
      'https://rickandmortyapi.com/api/episode/3',
      'https://rickandmortyapi.com/api/episode/4',
      'https://rickandmortyapi.com/api/episode/5',
      'https://rickandmortyapi.com/api/episode/6',
      'https://rickandmortyapi.com/api/episode/7',
      'https://rickandmortyapi.com/api/episode/8',
      'https://rickandmortyapi.com/api/episode/9',
      'https://rickandmortyapi.com/api/episode/10',
      'https://rickandmortyapi.com/api/episode/11',
      'https://rickandmortyapi.com/api/episode/12',
      'https://rickandmortyapi.com/api/episode/13',
      'https://rickandmortyapi.com/api/episode/14',
      'https://rickandmortyapi.com/api/episode/15',
      'https://rickandmortyapi.com/api/episode/16',
      'https://rickandmortyapi.com/api/episode/17',
      'https://rickandmortyapi.com/api/episode/18',
      'https://rickandmortyapi.com/api/episode/19',
      'https://rickandmortyapi.com/api/episode/20',
      'https://rickandmortyapi.com/api/episode/21',
      'https://rickandmortyapi.com/api/episode/22',
      'https://rickandmortyapi.com/api/episode/23',
      'https://rickandmortyapi.com/api/episode/24',
      'https://rickandmortyapi.com/api/episode/25',
      'https://rickandmortyapi.com/api/episode/26',
      'https://rickandmortyapi.com/api/episode/27',
      'https://rickandmortyapi.com/api/episode/28',
      'https://rickandmortyapi.com/api/episode/29',
      'https://rickandmortyapi.com/api/episode/30',
      'https://rickandmortyapi.com/api/episode/31',
      'https://rickandmortyapi.com/api/episode/32',
      'https://rickandmortyapi.com/api/episode/33',
      'https://rickandmortyapi.com/api/episode/34',
      'https://rickandmortyapi.com/api/episode/35',
      'https://rickandmortyapi.com/api/episode/36',
      'https://rickandmortyapi.com/api/episode/37',
      'https://rickandmortyapi.com/api/episode/38',
      'https://rickandmortyapi.com/api/episode/39',
      'https://rickandmortyapi.com/api/episode/40',
      'https://rickandmortyapi.com/api/episode/41',
      'https://rickandmortyapi.com/api/episode/42',
      'https://rickandmortyapi.com/api/episode/43',
      'https://rickandmortyapi.com/api/episode/44',
      'https://rickandmortyapi.com/api/episode/45',
      'https://rickandmortyapi.com/api/episode/46',
      'https://rickandmortyapi.com/api/episode/47',
      'https://rickandmortyapi.com/api/episode/48',
      'https://rickandmortyapi.com/api/episode/49',
      'https://rickandmortyapi.com/api/episode/50',
      'https://rickandmortyapi.com/api/episode/51'
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z'
  }, */