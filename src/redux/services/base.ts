import axios, { AxiosResponse } from "axios";

import { Entity, PagedData, ResultList } from "@redux/models/entities";
import { Url } from "@utils";

axios.defaults.baseURL = Url.AXIOS;

const responseData = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string, params = {}) => axios.get<T>(url, { params }).then(responseData),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseData),
  put: <T>(url: string, body: {}, params: {}) =>
    axios.put<T>(url, body, { params }).then(responseData),
  delete: <T>(url: string, params: {}) => axios.delete<T>(url, { params }).then(responseData)
};

function fixDate<T extends Entity>(obj: T) {
  return { ...obj, created: new Date(obj.created).toLocaleDateString() };
}

export function getPagedData<T extends Entity>(page: number, list: ResultList<T>): PagedData<T> {
  const nextPage = page + 1;
  const items = list.results.map(fixDate);
  const hasMore = list.info.pages !== page;
  return { nextPage, items, hasMore };
}

export default requests;
