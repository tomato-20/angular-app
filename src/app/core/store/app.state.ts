import { BookListState } from '@app/modules/book-list/state/book.state';
import { BookCollectionState } from '@app/modules/book-collection/state/book-collection.state';
import { BookAdminState } from '@app/modules/book-admin/state/book-admin.state';
import { BOOK_ADMIN_STATE } from '@app/modules/book-admin/store/book-admin.reducer';
import { COUNTER_STATE } from '@app/modules/counter/components/ngrx-counter/store/counter.reducers';
import { BOOK_COLLECTION_STATE } from '@app/modules/book-collection/store/collection.reducer';

export interface AppState {
  // [COUNTER_STATE]: number;
  // books: BookListState;
  // collection: ReadonlyArray<string>;
  // [BOOK_COLLECTION_STATE]: BookCollectionState;
  // [BOOK_ADMIN_STATE]: BookAdminState;
}
