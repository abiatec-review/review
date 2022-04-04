import { Location } from "@models/entities";

export interface LocationReducer {
  isLoading: boolean;
  locations: Array<Location>;
}
