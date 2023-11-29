import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { AddBookModel } from "../../book-list/model/add-book.model";
import { Book } from "@app/modules/book-list/model/books.model";

export const BookAdminActions = createActionGroup({
  source: 'Books Admin',
  events: {
    'Load Books' : emptyProps(),
    'Load Books Success' : props<{books: readonly Book[]}>(),
    'Add Book': props<{ book: AddBookModel }>(),
    'Form Submition Success' : emptyProps(),
    'Edit Book': props<{ book: Book }>(),
    'Edit Book Success' : emptyProps(),'Delete Book' : props<{id: string}>(),
    'Delete Book Success' : props<{id: string}>(),
    'Failure': props<{ error: string }>(),
    'Success': emptyProps(),
    'Reset Form Submition Status': emptyProps()
  },
});