import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CollectionItem } from '../model/CollectonItem';
import { BookCollectionState } from '../state/book-collection.state';
import { BOOK_COLLECTION_STATE } from './collection.reducer';

export const selectCollectionItemListFeature = createFeatureSelector<BookCollectionState>(BOOK_COLLECTION_STATE) 

export const selectCollectionItems = createSelector(
  selectCollectionItemListFeature,
  (collectionItemList) => collectionItemList.items
);

export const selectCollectionItemById = (id: string) =>
  createSelector(selectCollectionItemListFeature, (collectionItemList) =>
    collectionItemList.items.find((item: CollectionItem) => item.id === id)
  );
