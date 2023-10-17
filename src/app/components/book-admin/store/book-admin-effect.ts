import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BooksApiService } from '../../book-list/service/books-api.service';
import { BooksAdminActions } from './book-admin.action';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class BookAdminEffects {
  readonly addBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksAdminActions.addBook),
      exhaustMap(({ book }) => {
        console.log(book)
        return this.booksApiService.addBook(book).pipe(
          map((item) => {
            console.log(item)
            return BooksAdminActions.success();
          }),
          catchError((error) => {
            return of(BooksAdminActions.failure({ error }));
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
