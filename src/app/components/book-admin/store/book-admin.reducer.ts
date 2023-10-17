import { createReducer, on } from '@ngrx/store';
import { FormState } from '../state/form.state';
import { BooksAdminActions } from './book-admin.action';

export const initialFormState: FormState = {
  loading: false,
  success: false,
  error: '',
};
export const bookAdminReducer = createReducer(
  initialFormState,
  on(BooksAdminActions.addBook, (state, _) => ({
    ...state,
    loading: true,
    success: false,
  })),
  on(BooksAdminActions.success, (state, _) => ({
    loading: false,
    success: true,
    error: '',
  })),
  on(BooksAdminActions.failure, (state, {error}) => ({
    error,
    loading: false,
    success: false,
  }))
);
