export type Characters = {
  created?: string;
  episode?: string[];
  gender?: string;
  id: number;
  image?: string;
  location?: {
    name: string;
    url: string;
  };
  name?: string;
  origin?: {
    name: string;
    url: string;
  };
  species?: string;
  status?: string;
  type?: string;
  url?: string;
};

export type infoTypes = {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
};

export type allDataInfo = {
  info: infoTypes;
  results: Characters[];
};
