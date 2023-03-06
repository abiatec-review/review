import Home from './Home';
import EpisodesList from '../EpisodesList';
import CharactersFromEpisode from '../CharactersFromEpisode';
import CharactersFrom from '../CharactersFrom';

export const navigations = [
  {
    name: 'Home',
    component: Home,
    options: {headerShown: false},
  },
  {
    name: 'episodesList',
    component: EpisodesList,
    options: {title: 'Episodes List'},
  },
  {
    name: 'charactersFromEpisode',
    component: CharactersFromEpisode,
    options: ({route}: any) => ({
      title: `Characters From Episode # ${route.params.episodeNum}`,
    }),
  },
  {
    name: 'charactersFrom',
    component: CharactersFrom,
    options: ({route}: any) => ({
      title: `Characters From ${route.params.episodeNum}`,
    }),
  },
];
