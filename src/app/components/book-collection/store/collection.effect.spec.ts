import { TestBed } from '@angular/core/testing';
import { CollectionApiService } from '../service/book-collection-api.service';
import { CollectionEffects } from './collection.effect';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  mockBook,
  mockCollectionItem,
  mockCollectionItemArray,
} from 'src/mocks/mockDatas';
import { CollectionItemActions } from './collection.action';
import { cold, hot } from 'jasmine-marbles';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CollectionItem } from '../model/CollectonItem';

describe('BookCollectonEffects', () => {
  let collectionApiService: CollectionApiService;
  let effects: CollectionEffects;
  let actions$ = new Observable<Action>();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockActions(() => actions$)],
      imports: [HttpClientTestingModule],
    });

    collectionApiService = TestBed.inject(CollectionApiService);
    effects = TestBed.inject(CollectionEffects);
  });

  describe('load all items', () => {
    it('should return loadAllItemsSuccess with result on success', () => {
      let allItems = mockCollectionItemArray;

      let action: Action = CollectionItemActions.loadAllItems();
      let completion: Action = CollectionItemActions.loadAllItemsSuccess({
        items: allItems,
      });

      actions$ = hot('-a', {
        a: action,
      });

      const loadCollectionRespose = cold('-b|', {
        b: allItems,
      });

      const expected = cold('--c', {
        c: completion,
      });

      spyOn(collectionApiService, 'getCollection').and.returnValue(
        loadCollectionRespose
      );
      expect(effects.loadBookCollectios$).toBeObservable(expected);
    });

    it('should return  loadItemFailure with error on error', () => {
      const error = 'error';

      let action: Action = CollectionItemActions.loadAllItems();
      let completion: Action = CollectionItemActions.failure({ error });

      actions$ = hot('-a', {
        a: action,
      });

      const loadCollectionRespose = cold('-#|', {}, error);

      const expected = cold('--c', {
        c: completion,
      });

      spyOn(collectionApiService, 'getCollection').and.returnValue(
        loadCollectionRespose
      );
      expect(effects.loadBookCollectios$).toBeObservable(expected);
    });
  });

  describe('add item', () => (
    it('should return addItemsSuccess with result on success', () => {
      let newAddedBook: CollectionItem = { ...mockBook, readingStatus: 0 };

      let action: Action = CollectionItemActions.addItem({ book: mockBook });
      let completion: Action = CollectionItemActions.addItemSuccess({
        book: newAddedBook,
      });

      actions$ = hot('-a', {
        a: action,
      });

      const loadCollectionRespose = cold('-b|', {
        b: newAddedBook,
      });

      const expected = cold('--c', {
        c: completion,
      });

      spyOn(collectionApiService, 'addToCollection').and.returnValue(
        loadCollectionRespose
      );
      expect(effects.addBookToCollection$).toBeObservable(expected);
    }),
    it('should return  addItemFailure with error on error', () => {
      const error = 'error';

      let action: Action = CollectionItemActions.addItem({ book: mockBook });
      let completion: Action = CollectionItemActions.failure({ error });

      actions$ = hot('-a', {
        a: action,
      });

      const loadCollectionRespose = cold('-#|', {}, error);

      const expected = cold('--c', {
        c: completion,
      });

      spyOn(collectionApiService, 'addToCollection').and.returnValue(
        loadCollectionRespose
      );
      expect(effects.addBookToCollection$).toBeObservable(expected);
    })
  ));

  describe('remove item', () => {
    let itemToRemove = mockCollectionItem;

    it('should return removeItemsSuccess with result on success', () => {
      let action: Action = CollectionItemActions.removeItem({
        bookId: itemToRemove.id,
      });
      let completion: Action = CollectionItemActions.removeItemSuccess({
        bookId: itemToRemove.id,
      });

      actions$ = hot('-a', {
        a: action,
      });

      const response = cold('-b|', {
        b: {},
      });

      const expected = cold('--c', {
        c: completion,
      });

      spyOn(collectionApiService, 'removeFromCollection').and.returnValue(
        response
      );
      expect(effects.removeBookFromCollection$).toBeObservable(expected);
    });

    it('should return  removeItemFailure with error on error', () => {
      const error = 'error';

      let action: Action = CollectionItemActions.removeItem({
        bookId: itemToRemove.id,
      });
      let completion: Action = CollectionItemActions.failure({ error });

      actions$ = hot('-a', {
        a: action,
      });

      const response = cold('-#|', {}, error);

      const expected = cold('--c', {
        c: completion,
      });

      spyOn(collectionApiService, 'removeFromCollection').and.returnValue(
        response
      );
      expect(effects.removeBookFromCollection$).toBeObservable(expected);
    });
  });
});
