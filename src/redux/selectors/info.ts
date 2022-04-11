import { StoreType } from "types";

export const getInfo = (store:StoreType) => store.info;

export const getPrevLink = (store:StoreType) => store.info.prev;

export const getNextLink = (store:StoreType) => store.info.next;
