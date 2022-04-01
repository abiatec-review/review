import { RootReducer } from "../../reducers";

export const getButtonTextSelector = (store: RootReducer) => store?.contentful?.items?.[0]?.fields?.modules?.[0]?.fields;
export const getContentfulFields = (store: RootReducer) => store?.contentful?.items?.[0]?.fields;
export const getImageSelector = (store: RootReducer) => store?.contentful?.items?.[0]?.fields?.image?.fields?.file?.url;