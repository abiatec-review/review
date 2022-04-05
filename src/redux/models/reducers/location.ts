import { Location } from "@models/entities";

export interface LocationReducer {
  error?: string;
  isLoading: boolean;
  locations: Array<Location>;
}
