import {
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { Book } from '../model/books.model';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});


// export const CollectionItemActions = createActionGroup({
//   source : 'Collection',
//   events : {
//     'Get  Collection Item List': emptyProps(),
//     // 'Get  Collection Item List': props<{ collection: string[] }>(),
//     'Load Collection Item List Success' : props<{items: ReadonlyArray<Book>}>(),
//     'Load Collection Item List Failure' : props<{error: string}>(),
//     'Add Item To Collection' : props<{book: Book}>(),
//     'Reove Item From Collection' : props<{bookId:string}>()
//   }

// })

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Load Books List': emptyProps(),
    'Load Books List Success': props<{ books: ReadonlyArray<Book> }>(),
    'Load Book List Error': props<{ error: string }>(),
    // 'Retrieve Books List'  : emptyProps()
  },
});
