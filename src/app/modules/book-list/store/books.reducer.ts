import { createReducer, on } from '@ngrx/store';
import {  BooksApiActions } from './books.action';
import { BookListState } from '../state/book.state';

export const BOOK_LIST_STATE = 'BOOK_LIST_STATE'

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

