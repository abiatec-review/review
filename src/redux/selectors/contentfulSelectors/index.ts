import { RootReducer } from "../../reducers";

export const getContentfulFieldsSelector = (store: RootReducer) => store?.contentful?.items?.[0]?.fields;
export const getButtonTextSelector = (store: RootReducer) => {
  const contentFields = getContentfulFieldsSelector(store)
  return contentFields?.modules?.[0]?.fields;
} 
export const getImageSelector = (store: RootReducer) => {
  const contentFields = getContentfulFieldsSelector(store);
  return contentFields?.image?.fields?.file?.url
}

export const getErrorImageSelector = (store: RootReducer) => {
  const contentFields = getContentfulFieldsSelector(store);
  return contentFields?.errorImage?.fields?.file?.url
}

export const getErrorTextSelector = (store: RootReducer) => {
  const contentFields = getContentfulFieldsSelector(store);
  return contentFields?.errorText
}