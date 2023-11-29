// import { Action } from '@ngrx/store';
// import { FormState } from '../state/BooksAdminState';
// import * as fromReducer from './book-admin.reducer';
// import { BooksAdminActions } from './book-admin.action';
// import { AddBookModel } from '../../book-list/model/add-book.model';

// describe('BookAdminReducer', () => {
//   const initialState: FormState = fromReducer.initialFormState;

//   describe('unknown action', () => {
//     it('should return previous state on unknown action', () => {
//       const action: Action = {
//         type: 'unknown',
//         payload: {},
//       } as Action;

//       const state = fromReducer.bookAdminReducer(initialState, action);
//       expect(state).toEqual(initialState);
//     });
//   });

//   describe('add action', () => {
//     const thumbnailValue = 'https://thumbnail.com/file/1/image.jpg/123';
//     let newBook: AddBookModel = {
//       title: 'new book',
//       authors: ['author'],
//       imageLinks: {
//         smallThumbnail: thumbnailValue,
//         thumbnail: thumbnailValue,
//       },
//     };
//     it('should set loading true on add book action', () => {
//       let expected: FormState = {
//         ...initialState,
//         loading: true,
//       };
//       const state = fromReducer.bookAdminReducer(
//         initialState,
//         BooksAdminActions.addBook({ book: newBook })
//       );
//       expect(state).toEqual(expected);
//     });

//     it('should set loading false and success true on add book success', () => {
//         const expected : FormState = {
//             ...initialState,
//             success: true
//         }
//         const state= fromReducer.bookAdminReducer(initialState, BooksAdminActions.success())
//         expect(state).toEqual(expected)
//     })

//     it('should set loading false, success false and set error on failure', () => {
//         const error = 'error'
//         const expected: FormState = {
//             loading: false,
//             success: false,
//             error
//         } 
//         const state = fromReducer.bookAdminReducer(initialState,BooksAdminActions.failure({error}))
//         expect(state).toEqual(expected)
//     })
//   });
// });
