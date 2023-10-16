import { createReducer, on } from '@ngrx/store';
import {  BooksApiActions } from './books.action';
import { BookListState } from '../state/book.state';
import { FormState } from '../../book-admin/state/form.state';

// export const initialCollectionState: ReadonlyArray<string> = [];

// export const collectionReducer = createReducer(
//   initialCollectionState,
//   on(BooksActions.addBook, (state, { bookId }) => {
//     if (state.indexOf(bookId) > -1) return state;
//     return [...state, bookId];
//   }),
//   on(BooksActions.removeBook, (state, { bookId }) =>
//     state.filter((id) => id !== bookId)
//   )
// );

export const initialState: BookListState = {
  items: [],
  loading: false,
  error: '',
};

export const booksreducer = createReducer(
  initialState,
  on(BooksApiActions.loadBooksList, (state) => ({ ...state, loading: true })),
  on(BooksApiActions.loadBookListError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(BooksApiActions.loadBooksListSuccess, (state, { books }) => ({
    ...state,
    items: books,
    loading: false,
  })),

);

