import { Location } from "@redux/models/entities";

export interface LocationReducer {
  error?: string;
  isLoading: boolean;
  locations: Array<Location>;
}
