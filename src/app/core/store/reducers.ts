import { collectionItemReducer } from 'src/app/modules/book-collection/store/collection.reducer';
import {
  booksreducer,
  // collectionReducer,
} from 'src/app/modules/book-list/store/books.reducer';
import { CounterReducer } from 'src/app/modules/counter/components/ngrx-counter/store/counter.reducers';
import { bookAdminReducer } from 'src/app/modules/book-admin/store/book-admin.reducer';

export const reducers = {
  count: CounterReducer,
  books: booksreducer,
  // collection: collectionReducer,
  collectionItemList: collectionItemReducer,
  bookFormState: bookAdminReducer 
};
