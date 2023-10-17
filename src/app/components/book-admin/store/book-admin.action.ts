import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { AddBookModel } from "../../book-list/model/add-book.model";

export const BooksAdminActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ book: AddBookModel }>(),
    'Success': emptyProps(),
    'Failure': props<{ error: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});