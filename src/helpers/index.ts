export const mapChars = (arrOfChars: Array<string>) => arrOfChars.map((char): {id: number, path: string} => ({ id: Number(char.split('/').reverse()[0]), path: char }));
export const helpFunction2 = () => 1;
export const helpFunction3 = () => '!';
