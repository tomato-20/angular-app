import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BooksApiService } from '../../book-list/service/books-api.service';
import { BookAdminActions } from './book-admin.action';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class BookAdminEffects {
  readonly loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookAdminActions.loadBooks),
      exhaustMap(() => {
        return this.booksApiService.getBooks().pipe(
          map((books) => BookAdminActions.loadBooksSuccess({ books })),
          catchError((err) => {
            return of(BookAdminActions.failure({ error: err }));
          })
        );
      })
    );
  });

  readonly addBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookAdminActions.addBook),
      exhaustMap(({ book }) => {
        return this.booksApiService.addBook(book).pipe(
          map((item) => {
            return BookAdminActions.formSubmitionSuccess();
          }),
          catchError((error) => {
            return of(BookAdminActions.failure({ error }));
          })
        );
      })
    );
  });

  readonly editBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookAdminActions.editBook),
      exhaustMap(({book})=>{
        return this.booksApiService.updateBook(book).pipe(
          map(item => {
            return BookAdminActions.formSubmitionSuccess();
          }),
          catchError((error) => {
            return of(BookAdminActions.failure({error}))
          })
        )
      })
    )
  });

  readonly deleteBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookAdminActions.deleteBook),
      exhaustMap(({ id }) => {
        return this.booksApiService.deleteBook(id).pipe(
          map(() => {
            return BookAdminActions.deleteBookSuccess({ id });
          }),
          catchError((error) => {
            return of(BookAdminActions.failure({ error }));
          })
        );
      })
    );
  });
  constructor(
    private readonly actions$: Actions,
    private readonly booksApiService: BooksApiService // private readonly store: Store<AppState>
  ) {}
}
