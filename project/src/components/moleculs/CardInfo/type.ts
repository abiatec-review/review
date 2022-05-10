import { IResults } from '../../../models/responseTypes';

export interface CardInfoProps {
  cardData: IResults,
}

export interface IRequireData {
  name: string,
  gender?: string,
}
