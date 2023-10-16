import * as fromReducer from './collection.reducer';
import { CollectionItemActions as collectionActions } from './collection.action';
import {
  mockBook,
  mockCollectionItem,
  mockCollectionItemArray,
} from 'src/mocks/mockDatas';
import { CollectionItem } from '../model/CollectonItem';

describe('Collection Reducer', () => {
  const initialState = fromReducer.collectionItemInitialState;
  describe('unknown action', () => {
    it('should return previous state on unknown action', () => {
      const action = {
        type: 'unknown',
        payload: {},
      };
      const state = fromReducer.collectionItemReducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('load all action', () => {
    it('should set loading true on load all item', () => {
      const expectedState = {
        ...initialState,
        loading: true,
      };
      const state = fromReducer.collectionItemReducer(
        initialState,
        collectionActions.loadAllItems
      );
      expect(state).toEqual(expectedState);
    });

    it('should load books to state load all item success ', () => {
      const expectedState = {
        ...initialState,
        items: mockCollectionItemArray,
      };
      const state = fromReducer.collectionItemReducer(
        initialState,
        collectionActions.loadAllItemsSuccess({
          items: mockCollectionItemArray,
        })
      );
      expect(state).toEqual(expectedState);
    });

    it('should set error ', () => {
      const error = 'error';
      const expectedState = {
        ...initialState,
        loading: false,
        error: 'error',
      };

      const state = fromReducer.collectionItemReducer(
        { ...initialState, loading: true },
        collectionActions.failure({ error })
      );
      expect(state).toEqual(expectedState);
    });
  });

  describe('add action', () => {
    let someState = {
      ...initialState,
      items: mockCollectionItemArray,
    };

// it('should trigger add success on addition', () => {
    //   let bookToAdd = mockBook;
    //   const expectedState = {
    //     ...initialState,
    //     items: [...mockCollectionItemArray, { ...bookToAdd, readingStatus: 0 }],
    //   };
    //   const state = fromReducer.collectionItemReducer(
    //     someState,
    //     collectionActions.addItem({ book: bookToAdd })
    //   );
    //   expect(state).toEqual(expectedState);
    // });

    it('should add item from book list and update state in immutable way', () => {
      let bookToAdd: CollectionItem = { ...mockBook, readingStatus: 0 };
      const expectedState = {
        ...initialState,
        items: [...mockCollectionItemArray, { ...bookToAdd }],
      };
      const state = fromReducer.collectionItemReducer(
        someState,
        collectionActions.addItemSuccess({ book: bookToAdd })
      );
      expect(state).toEqual(expectedState);
    });

    it('should not add item from book list if book already exist in collection', () => {
      const state = fromReducer.collectionItemReducer(
        someState,
        collectionActions.addItemSuccess({ book: mockCollectionItem })
      );
      expect(state).toEqual(someState);
    });
  });

  describe('remove action', () => {
    let someState = {
      ...initialState,
      items: mockCollectionItemArray,
    };
    it('should remoce selected book from collection and update state immutably', () => {
      const expectedState = {
        ...initialState,
        items: mockCollectionItemArray.filter(
          (book) => book.id !== mockCollectionItem.id
        ),
      };

      const state = fromReducer.collectionItemReducer(
        someState,
        collectionActions.removeItemSuccess({ bookId: mockCollectionItem.id })
      );
      expect(state).toEqual(expectedState);
    });
  });

  describe('change readig status action', () => {
    let beforeUpdateItem = { ...mockBook, readingStatus: 0 };
    let someState = {
      ...initialState,
      items: [...mockCollectionItemArray.slice(1, 2), { ...beforeUpdateItem }],
    };
    const afterUpdateItem = {
      ...beforeUpdateItem,
      readingStatus: 2,
    };

    it('should update the state immutably after updatint reading status of selected item', () => {
      let expectedState = {
        ...initialState,
        items: [...mockCollectionItemArray.slice(1, 2), { ...afterUpdateItem }],
      };

      const state = fromReducer.collectionItemReducer(
        someState,
        collectionActions.changeReadingStatusSuccess({
          bookId: beforeUpdateItem.id,
          readingStatus: afterUpdateItem.readingStatus,
        })
      );

      expect(state).toEqual(expectedState);
    });
  });
});
