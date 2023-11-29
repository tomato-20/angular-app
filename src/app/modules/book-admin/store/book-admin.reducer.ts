import { createReducer, on } from '@ngrx/store';
import { BookAdminState } from '../state/book-admin.state';
import { BookAdminActions } from './book-admin.action';

export const BOOK_ADMIN_STATE = 'BOOK_ADMIN_STATE';

export const initialState: BookAdminState = {
  items: [],
  loading: false,
  error: '',
  success: false,
  formSubmitionSuccess: false
};

export const bookAdminReducer = createReducer(
  initialState,
  on(BookAdminActions.loadBooks, (state) => ({
    ...state,
    loading: true,
    success: false,
  })),
  on(BookAdminActions.loadBooksSuccess, (state, { books }) => ({
    ...state,
    items: books,
    loading: false,
    success: true,
    formSubmitionSuccess: false
  })),
  on(BookAdminActions.failure, (state, { error }) => ({
    ...state,
    loading: false,
    success: false,
    formSubmitionSuccess: false,
    error,
  })),
  on(BookAdminActions.success, (state, _) => ({
    ...state,
    loading: false,
    success: true,
    error: '',
  })),
  on(BookAdminActions.formSubmitionSuccess, (state, _) => ({
    ...state,
    loading: true,
    success: true,
    formSubmitionSuccess: true,
  })), 
  on(BookAdminActions.deleteBook, (state, { id }) => ({
    ...state,
    loading: true,
    success: false,
  })),
  on(BookAdminActions.deleteBookSuccess, (state, { id }) => ({
    ...state,
    items: [...state.items.filter((book) => book.id !== id)],
    loading: false,
  })),
  on(BookAdminActions.resetFormSubmitionStatus, (state, _) => ({
    ...state,
    loading: false,
    success: false,
    error: '',
    formSubmitionSuccess: false
  }))
);
