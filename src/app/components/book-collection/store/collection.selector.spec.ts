import {
  mockCollectionItem,
  mockCollectionItemArray,
} from 'src/mocks/mockDatas';
import { BookCollectionState } from '../state/book-collection.state';
import {
  selectCollectionItemById,
  selectCollectionItemListFeature,
  selectCollectionItems,
} from './collection.selector';
import { AppState } from 'src/app/store/app.state';

describe('CollectionSelector', () => {
  const initialState: BookCollectionState = {
    items: mockCollectionItemArray,
    loading: false,
    error: '',
  };

  const appState: AppState = {
    count: 0,
    collectionItemList: initialState,
    books: { items: [], loading: false, error: '' },
    collection: [],
    bookFormState: { loading: false, success: false, error: '' },
  };

  it('should select collection state', () => {
    const result = selectCollectionItemListFeature(appState);
    expect(result).toEqual(initialState);
  });

  it('should return collection item list', () => {
    const result = selectCollectionItems.projector(initialState);
    expect(result.length).toEqual(mockCollectionItemArray.length);
    expect(result[0]).toEqual(mockCollectionItemArray[0]);
  });

  it('should return collection item ', () => {
    const result = selectCollectionItemById(mockCollectionItem.id).projector(
      initialState
    );
    expect(result).toEqual(mockCollectionItem);
  });
});
