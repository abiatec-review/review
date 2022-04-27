export const fetchCharacters = (charactersUrl: string[]) => {
  const randomValue = Math.random() * (charactersUrl.length - 3);
  const urlArr = charactersUrl.slice(randomValue, randomValue + 3);
  const requests = urlArr.map((url) => fetch(url));
  return Promise.all(requests).then((res) => Promise.all(res.map((r) => r.json())));
};

export const fetchEpisodes = (urlEpisodes: string[]) => {
  const requestsEpisodes = urlEpisodes.map((url) => fetch(url));
  return Promise.all(requestsEpisodes).then((res) => Promise.all(res.map((r) => r.json())));
};