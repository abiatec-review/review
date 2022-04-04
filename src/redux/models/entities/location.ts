import { ResponseObject } from "./base";

export interface Location extends ResponseObject {
  id: number;
  type: string;
  dimension: string;
  residents: Array<string>;
  created: string;
}
