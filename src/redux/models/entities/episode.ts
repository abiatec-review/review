import { ResponseObject } from "./common";

export interface Episode extends ResponseObject {
  id: number;
  air_date: string;
  episode: string;
  characters: Array<string>;
  created: string;
}
