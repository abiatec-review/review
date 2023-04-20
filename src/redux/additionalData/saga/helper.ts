export const helper = {
  getCharactersIdFromUrl: (charactersUrl: string[]) => {
    return charactersUrl.map((item: string) => item.split('/').slice(-1)[0]);
  },
};
