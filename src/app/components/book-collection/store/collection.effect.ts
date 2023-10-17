import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CollectionItemActions } from './collection.action';
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { CollectionApiService } from '../service/book-collection-api.service';

@Injectable({ providedIn: 'root' })
export class CollectionEffects {
  readonly loadBookCollectios$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CollectionItemActions.loadAllItems),
      mergeMap(() => {
        return this.collectionApiService.getCollection().pipe(
          map((items) => CollectionItemActions.loadAllItemsSuccess({ items })),
          catchError((error) => {
            return of(CollectionItemActions.failure({ error }));
          })
        );
      })
    );
  });

  readonly addBookToCollection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CollectionItemActions.addItem),
      exhaustMap(({ book }) => {
        return this.collectionApiService.addToCollection(book).pipe(
          map((item) => {
            console.log(item);
            console.log(item.readingStatus);
            return CollectionItemActions.addItemSuccess({ book: item });
          }),
          catchError((error) => {
            return of(CollectionItemActions.failure({ error }));
          })
        );
      })
    );
  });

  readonly removeBookFromCollection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CollectionItemActions.removeItem),
      exhaustMap(({ bookId }) => {
        console.log('remove item called');
        return this.collectionApiService.removeFromCollection(bookId).pipe(
          map((item) => CollectionItemActions.removeItemSuccess({ bookId })),
          catchError((error) => {
            return of(CollectionItemActions.failure({ error }));
          })
        );
      })
    );
  });

  readonly changeReadingStatus$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CollectionItemActions.changeReadingStatus),
      exhaustMap(({item}) => {
        return this.collectionApiService.updateReadingStatus(item.id, item.readingStatus).pipe(
          map((item) => CollectionItemActions.changeReadingStatusSuccess({bookId: item.id, readingStatus: item.readingStatus})),
          catchError(error => of(CollectionItemActions.failure({error})))
        )
      })
    )
  })

  constructor(
    private actions$: Actions,
    private collectionApiService: CollectionApiService // private store: Store<AppState>
  ) {}
}
