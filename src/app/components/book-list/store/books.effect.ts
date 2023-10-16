import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { BooksApiService } from '../service/books-api.service';
import { BooksActions, BooksApiActions} from './books.action';
import { catchError, exhaustMap, map, merge, mergeMap, of } from 'rxjs';
import { Book } from '../model/books.model';

// export const loadBooks = createEffect(
//   (actions$ = inject(Actions), booksApiService = inject(BooksApiService)) => {
//     return actions$.pipe(
//       ofType(BooksApiActions.loadBooksList),
//       exhaustMap(() => {
//         return booksApiService.getBooks().pipe(
//           map((books) => BooksApiActions.loadBooksListSuccess({ books })),
//           catchError((err) => {
//             let error = JSON.stringify(err);
//             return of(BooksApiActions.loadBookError({ error }));
//           })
//         );
//       })
//     );
//   },
//   { functional: true }
// );

// export const loadBookCollectios = createEffect(
//   (
//     action$ = inject(Actions),
//     booksApiService = inject(BooksApiService),
//     // store: Store<AppState>
//   ) => {
//     return action$.pipe(
//       ofType(BooksActions.getBookCollection),
//       mergeMap(() => {
//         return store
//           .select(selectBookIdsCollection)
//           .pipe(map((ids) => ids.map((id) => booksApiService.getBookById(id))));
//       })
//     );
//   },
//   { functional: true }
// );

@Injectable()
export class BookEffects {
  readonly loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksApiActions.loadBooksList),
      exhaustMap(() => {
        return this.booksApiService.getBooks().pipe(
          map((books) => BooksApiActions.loadBooksListSuccess({ books })),
          catchError((err) => {
            return of(BooksApiActions.loadBookListError({ error : err }));
          })
        );
      })
    );
  });

  readonly addBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksActions.addBook),
      exhaustMap(({ book }) => {
        return this.booksApiService.addBook(book).pipe(
          map((item) => {

            return BooksActions.success();
          }),
          catchError((error) => {
            return of(BooksActions.failure({ error }));
          })
        );
      })
    );
  }); 

  constructor(
    private readonly actions$: Actions,
    private readonly booksApiService: BooksApiService, // private readonly store: Store<AppState>
  ) {}
}
