import { createReducer, on } from '@ngrx/store';
import { CollectionItemActions } from './collection.action';
import { BookCollectionState } from '../state/book-collection.state';
import { BookReadingStatusEnum, CollectionItem } from '../model/CollectonItem';

export const BOOK_COLLECTION_STATE = 'BOOK_COLLECTION_STATE'; 

export const collectionItemInitialState: BookCollectionState = {
  items: [],
  loading: false,
  error: '',
};

export const collectionItemReducer = createReducer(
  collectionItemInitialState,
  on(CollectionItemActions.loadAllItems, (state, _) => ({
    ...state,
    loading: true,
  })),
  on(CollectionItemActions.loadAllItemsSuccess, (state, { items }) => {
    return {
      ...state,
      items,
      loading: false,
    };
  }),
  on(CollectionItemActions.failure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(CollectionItemActions.addItemSuccess, (state, { book }) => {
    let bookFound = state.items.find((item) => item.id === book.id);
    if (bookFound) return { ...state };
    let curretItems = [...state.items];
    let newCollectionItem: CollectionItem = {
      ...book,
      readingStatus: BookReadingStatusEnum.ToRead,
    };
    curretItems.push(newCollectionItem);
    return { ...state, items: curretItems };
  }),
  on(CollectionItemActions.removeItemSuccess, (state, { bookId }) => ({
    ...state,
    items: state.items.filter((book) => book.id !== bookId),
  })),
  on(
    CollectionItemActions.changeReadingStatusSuccess,
    (state, { bookId, readingStatus }) => {
      console.log(bookId, readingStatus);
      let newUpdatedList = [
        ...state.items.map((item) => {
          if (item.id === bookId) {
            return { ...item, readingStatus };
          }
          return item;
        }),
      ];
      return {
        ...state,
        items: newUpdatedList,
      };
    }
  )
);
