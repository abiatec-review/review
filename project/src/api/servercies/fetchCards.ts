import { apiUrl } from './apiUrl';

export const fetchCards = async (value: string) => {
  const res = await fetch(`${apiUrl}${value}`);
  const data = await res.json();
  return data;
};

export const fetchMoreCards = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
