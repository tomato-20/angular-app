import { AppState } from 'src/app/store/app.state';
import { BookListState } from '../state/book.state';
import { mockBookArray } from 'src/mocks/mockDatas';
import { selectBookFeature, selectBooks } from './books.selector';

describe('BooksSelector', () => {
  const initialState = {
    items: mockBookArray,
    loading: false,
    error: '',
  };

  const appState: AppState = {
    count: 0,
    books: initialState,
    collectionItemList: { items: [], loading: false, error: '' },
    collection: [],
    bookFormState: {loading: false, success: false, error:''}
  };

  it('should select books state', () => {
    expect(selectBookFeature(appState)).toEqual(initialState)
  })
  
  it('should select the book list', () => {
    const result = selectBooks.projector(initialState);
    expect(result.length).toEqual(mockBookArray.length);
    expect(result[0]).toEqual(mockBookArray[0]);
  });
});
