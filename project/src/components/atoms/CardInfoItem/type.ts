import { ILocation, IOrigin } from '../../../models/responseTypes';

export interface CardInfoItemProps {
  field: string,
  data?: string | ILocation | string[] | IOrigin | number,
}
