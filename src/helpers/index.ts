/* eslint-disable arrow-body-style */
export const mapChars = (arrOfChars: Array<string>) => {
  return arrOfChars.map((char): {id: number, path: string} => ({ id: Number(char.split('/').reverse()[0]), path: char }));
};
