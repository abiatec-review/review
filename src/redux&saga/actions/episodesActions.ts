export const addEpisodesInfo = (payload: any) => ({
  type: 'ADD_EPISODES_INFO',
  payload,
});

export const getEpisodesInfo = (payload: any) => ({
  type: 'GET_EPISODES_INFO',
  payload,
});

export const addNewChar = (payload: any) => ({
  type: 'ADD_NEW_CHARACTERS',
  payload,
});

export const redefineEpisodesInfo = (payload: any) => ({
  type: 'REDEFINE_EPISODES_INFO',
  payload,
});

export const redefineEpisodesUrlList = (payload: any) => ({
  type: 'REDEFINE_EPISODES_URL_LIST',
  payload,
});

export const clearEpisodesInfoList = () => ({
  type: 'CLEAR_EPISODES_INFO',
});
