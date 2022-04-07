export interface ResponseObject {
  name: string;
  url: string;
}

export interface ResultList<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Array<T>;
}
