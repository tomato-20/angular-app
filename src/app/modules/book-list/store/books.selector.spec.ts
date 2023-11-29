import { AppState } from '@core/store/app.state';
import { BookListState } from '../state/book.state';
import { mockBookArray } from 'src/mocks/mockDatas';
import { selectBookFeature, selectBooks } from './books.selector';

describe('BooksSelector', () => {
  const initialState = {
    items: mockBookArray,
    loading: false,
    error: '',
  };
  
  it('should select the book list', () => {
    const result = selectBooks.projector(initialState);
    expect(result.length).toEqual(mockBookArray.length);
    expect(result[0]).toEqual(mockBookArray[0]);
  });
});
