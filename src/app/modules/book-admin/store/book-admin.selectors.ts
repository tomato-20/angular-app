import {  createFeatureSelector, createSelector } from '@ngrx/store';
import {  BookAdminState } from '../state/book-admin.state';
import { BOOK_ADMIN_STATE } from './book-admin.reducer';

export const selectbooksAdmin =createFeatureSelector<BookAdminState>(BOOK_ADMIN_STATE);

export const selectBooks = createSelector(
  selectbooksAdmin,
  (books) => books.items
);

export const selectStatus = createSelector(selectbooksAdmin, (books) => ({
  loading: books.loading,
  success: books.success,
  error: books.error,
  formSubmitionSuccess: books.formSubmitionSuccess,
}));

export const selectBookById = (id: string) =>
  createSelector(selectBooks, (books) => books.find((book) => book.id == id)!);
