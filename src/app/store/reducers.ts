import { collectionItemReducer } from 'src/app/components/book-collection/store/collection.reducer';
import {
  booksreducer,
  collectionReducer,
} from 'src/app/components/book-list/store/books.reducer';
import { CounterReducer } from 'src/app/components/counter/components/ngrx-counter/store/counter.reducers';

export const reducers = {
  count: CounterReducer,
  books: booksreducer,
  collection: collectionReducer,
  collectionItemList: collectionItemReducer,
};
