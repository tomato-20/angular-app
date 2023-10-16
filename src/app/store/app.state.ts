import { BookListState } from "src/app/components/book-list/state/book.state";
import { BookCollectionState } from "../components/book-collection/state/book-collection.state";
import { FormState } from "../components/book-list/state/form.state";

export interface AppState {
  count: number,
  books: BookListState;
  collection: ReadonlyArray<string>;
  collectionItemList: BookCollectionState;
  bookFormState: FormState
}
