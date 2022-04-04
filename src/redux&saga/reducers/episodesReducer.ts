const initialState = {
  arrayOfEpisodes: [],
  characters: { 0: 'htttp', 1: 'httsstp' },
  receivedEpisodesInfo: [],
};

export const episodesReducer = (
  state: typeof initialState = initialState,
  action: any, //  todo
) => {
  switch (action.type) {
    case 'REDEFINE_EPISODES_URL_LIST':
      return { ...state, arrayOfEpisodes: action.payload };
    // case 'ADD_NEW_CHARACTERS':
    //   return { ...state, characters: { ...state.characters, [action.payload.id]: action.payload.url } };
    case 'ADD_EPISODES_INFO':
      return { ...state, receivedEpisodesInfo: state.receivedEpisodesInfo.concat(action.payload) };
    case 'CLEAR_EPISODES_INFO':
      return { ...state, receivedEpisodesInfo: [] };
    default:
      return state;
  }
};

export default episodesReducer;
