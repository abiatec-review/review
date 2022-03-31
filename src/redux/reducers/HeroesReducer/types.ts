import { IContentItem } from "../../../components/Atoms/ContentItem"

export interface IHeroesState {
  heroes: IContentItem[],
  isError: boolean,
  isLoading: boolean,
}