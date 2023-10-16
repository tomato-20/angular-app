import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from '../model/books.model';
import { AppState } from 'src/app/store/app.state';

// export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

// export const selectCollectionState =
//   createFeatureSelector<ReadonlyArray<string>>('collection');

// export const selectBookCollection = createSelector(
//   selectBooks,
//   selectCollectionState,
//   (books, collection) => {
//     return collection
//       .map((id) => books.find((book) => book.id === id)!);
//   }
// );

export const selectBookFormState = (state: AppState) => state.bookFormState

export const selectBookFeature = (state: AppState) => state.books;

export const selectBooks = createSelector(
  selectBookFeature,
  (books) => books.items
);

// export const selectSearchedBooks = (key: string) =>
//   createSelector(selectBookFeature, (books) =>
//     books.items.filter((book) => {
//       const { title, authors } = book.volumeInfo;
//       return (
//         title.toLowerCase().includes(key.toLowerCase()) ||
//         (authors &&
//           authors.reduce((prevResult, author) => {
//             let hasValue = author.toLowerCase().includes(key);
//             return hasValue || prevResult;
//           }, false))
//       );
//     })
//   );

// export const selectBookIdsCollectionFeature = (state: AppState) =>
//   state.collection;

// export const selectBookIdsCollection = createSelector(
//   selectBookIdsCollectionFeature,
//   (collection) => collection
// );

// export const selectBookCollection = createSelector(
//   selectBookFeature,
//   selectBookIdsCollectionFeature,
//   (books, collection) => {
//     return collection.map((id) => books.items.find((book) => book.id === id)!);
//   }
// );
