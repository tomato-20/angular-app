import { CollectionItem } from "../model/CollectonItem";

export interface BookCollectionState {
    items: CollectionItem[],
    loading: boolean,
    error: string
}