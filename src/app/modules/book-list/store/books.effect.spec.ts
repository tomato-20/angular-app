import { Action } from '@ngrx/store';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { mockBookArray } from 'src/mocks/mockDatas';
import { BooksApiActions } from './books.action';

import { BookEffects } from './books.effect';
import { BooksApiService } from '../service/books-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BookEffects', () => {
  let actions$ = new Observable<Action>();
  let effects: BookEffects;
  let booksApiService: BooksApiService;
  //   let booksApiServiceSpy: { getBooks: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // { provide: BooksApiService, userValue: booksApiServiceSpy },
        BookEffects,
        provideMockActions(() => actions$),
        BooksApiService,
      ],
      imports: [HttpClientTestingModule],
    });

    booksApiService = TestBed.inject(BooksApiService);
    effects = TestBed.inject(BookEffects);
  });

  it('should return a loadItemSuccess action with loaded Items on success', () => {
    const allItems = mockBookArray;

    const action: Action = BooksApiActions.loadBooksList();
    const completion: Action = BooksApiActions.loadBooksListSuccess({
      books: allItems,
    });

    actions$ = hot('-a', {
      a: action,
    });
    // is this http request?
    const loadBooksResponse = cold('-b|', { b: allItems });
    const expected = cold('--c', { c: completion });

    booksApiService.getBooks = jasmine
      .createSpy()
      .and.returnValue(loadBooksResponse);
    // booksApiServiceSpy.getBooks.and.returnValue(loadBooksResponse);
    expect(effects.loadBooks$).toBeObservable(expected);
  });

  it('should return a loadError action with loaded Items on error', () => {
    const error = 'error'
    const action: Action = BooksApiActions.loadBooksList();
    const completion: Action = BooksApiActions.loadBookListError({error});

    actions$ = hot('-a', {
      a: action,
    });
    const loadBooksResponse = cold('-#|', {}, error);
    const expected = cold('--c', { c: completion });

    booksApiService.getBooks = jasmine
      .createSpy()
      .and.returnValue(loadBooksResponse);
    expect(effects.loadBooks$).toBeObservable(expected);
  });
});
