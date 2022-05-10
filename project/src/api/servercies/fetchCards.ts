import { IFilters } from '../../redux/actions/card';
import { apiUrl } from './apiUrl';

export const fetchCards = async (value: IFilters) => {
  const res = await fetch(`${apiUrl}/character/?${new URLSearchParams({ ...value })}`);
  const data = await res.json();
  return data;
};

export const fetchMoreCards = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
