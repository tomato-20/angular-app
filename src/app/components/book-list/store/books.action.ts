import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from '../model/books.model';

// export const BooksActions = createActionGroup({
//   source: 'Books',
//   events: {
//     'Add Book': props<{ bookId: string }>(),
//     'Remove Book': props<{ bookId: string }>(),
//   },
// });


export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Load Books List': emptyProps(),
    'Load Books List Success': props<{ books: ReadonlyArray<Book> }>(),
    'Load Book List Error': props<{ error: string }>(),

    // 'Retrieve Books List'  : emptyProps()
  },
});
