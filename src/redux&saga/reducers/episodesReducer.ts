const initialState = {
  characters: { },
  receivedEpisodesInfo: [],
};

export const episodesReducer = (
  state: typeof initialState = initialState,
  action: any,
) => {
  switch (action.type) {
    case 'REDEFINE_EPISODES_URL_LIST':
      return { ...state, arrayOfEpisodes: action.payload };
    case 'ADD_EPISODES_INFO':
      return { ...state, receivedEpisodesInfo: state.receivedEpisodesInfo.concat(action.payload) };
    case 'CLEAR_EPISODES_INFO':
      return { ...state, receivedEpisodesInfo: [] };
    case 'ADD_NEW_CHARACTERS':
      return { ...state, characters: { ...state.characters, ...action.payload } };
    default:
      return state;
  }
};

export default episodesReducer;
