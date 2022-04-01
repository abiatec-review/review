import { LOAD_CONTENTFUL_SUCCESS } from './index';

export type IContentfulAction = ILoadContentful

interface ILoadContentful {
  type: typeof LOAD_CONTENTFUL_SUCCESS,
  payload: any
}
