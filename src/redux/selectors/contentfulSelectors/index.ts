import { RootReducer } from "redux/reducers";

export const getContentfulFieldsSelector = (store: RootReducer) => store?.contentfulReducer?.items?.[0]?.fields;

export const getButtonTextSelector = (store: RootReducer) => getContentfulFieldsSelector(store)?.modules?.[0]?.fields;
export const getImageSelector = (store: RootReducer) => getContentfulFieldsSelector(store)?.image?.fields?.file?.url;
export const getErrorImageSelector = (store: RootReducer) => getContentfulFieldsSelector(store)?.errorImage?.fields?.file?.url;
export const getErrorTextSelector = (store: RootReducer) => getContentfulFieldsSelector(store)?.errorText;