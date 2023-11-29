import { Observable } from 'rxjs';
import { BooksApiService } from '../../book-list/service/books-api.service';
import { Action } from '@ngrx/store';
import { BookAdminEffects } from './book-admin.effect';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookAdminActions } from './book-admin.action';
import { AddBookModel } from '../../book-list/model/add-book.model';
import { cold, hot } from 'jasmine-marbles';
import { Book } from '../../book-list/model/books.model';

describe('BookAdminEffect', () => {
  let booksApiService: BooksApiService;
  let action$ = new Observable<Action>();
  let effect: BookAdminEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockActions(() => action$), BookAdminEffects],
      imports: [HttpClientTestingModule],
    });

    effect = TestBed.inject(BookAdminEffects);
    booksApiService = TestBed.inject(BooksApiService);
  });

  fdescribe('add book', () => {
    let newBookToAdd: AddBookModel = {
      title: 'new book',
      authors: ['author'],
      imageLinks: {
        smallThumbnail: 'https://thumbnail.com/file/1/image.jpg/123',
        thumbnail: 'https://thumbnail.com/file/1/image.jpg/123',
      },
    };
    let newAddedBook: Book = {
      id: 'dEGaXdgt',
      volumeInfo: {
        ...newBookToAdd,
      },
    };

    it('should return add success action with result on succes', () => {
      let action: Action = BookAdminActions.addBook({ book: newBookToAdd });
      let completion: Action = BookAdminActions.formSubmitionSuccess();

      action$ = hot('-a', {
        a: action,
      });

      const response = cold('-b', {
        b: newAddedBook,
      });

      const expected = cold('--c', {
        c: completion,
      });

      spyOn(booksApiService, 'addBook').and.returnValue(response);
      expect(effect.addBook$).toBeObservable(expected);
    });

    it('should return failure action with error on error', () => {
      const error = 'error';
      let action: Action = BookAdminActions.addBook({ book: newBookToAdd });
      let completion: Action = BookAdminActions.failure({ error });

      action$ = hot('-a', {
        a: action,
      });

      const response = cold('-#|', {}, error);

      const expected = cold('--c', {
        c: completion,
      });

      spyOn(booksApiService, 'addBook').and.returnValue(response);
      expect(effect.addBook$).toBeObservable(expected);
    });
  });

  fdescribe('load book', () => {
    it('should load ')
  })
});
