import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

export const selectCollectionItemListFeature = (state: AppState) =>
  state.collectionItemList;

export const selectCollectionItems = createSelector(
  selectCollectionItemListFeature,
  (collectionItemList) => collectionItemList.items
);

export const selectCollectionItemById = (id: string) => createSelector(
  selectCollectionItemListFeature,
  (collectionItemList) => collectionItemList.items.find((item)=>item.id===id)
)
