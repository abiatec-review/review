import { Location, PagedData } from "@redux/models/entities";

export interface LocationReducer {
  error?: string;
  locations: PagedData<Location>;
}
