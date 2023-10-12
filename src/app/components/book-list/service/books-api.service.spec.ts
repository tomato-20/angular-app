import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { mockBook, mockBookArray } from 'src/mocks/mockDatas';
import { BooksApiService } from './books-api.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('Book Api Service', () => {
  let url = 'http://localhost:3000';
  let httpControler: HttpTestingController;
  let bookApiService: BooksApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BooksApiService],
    });

    httpControler = TestBed.inject(HttpTestingController);
    bookApiService = TestBed.inject(BooksApiService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpControler.verify();
  });

  it('should call getBooks method and return array of book', (done: DoneFn) => {
    // check if correct result is returned
    bookApiService.getBooks().subscribe({
      next: (books) => {
        expect(books).toEqual(mockBookArray);
        done();
      },
    });

    //  check if correct method and api endpoint is hit
    const req = httpControler.expectOne({
      method: 'GET',
      url: `${url}/books`,
    });

    req.flush(mockBookArray);
  });

  it('should call getBookById method and return a book', () => {
    const id: string = 'yrVEBsjWiBcC';

    bookApiService
      .getBookById(id)
      .subscribe((book) => expect(book).toEqual(mockBook));

    const req = httpControler.expectOne({
      method: 'GET',
      url: `${url}/books/${id}`,
    });

    req.flush(mockBook);
  });

  it('should call getBookById method and throw error response for non existant book', ()=> {
    const id: string = 'djkjhdhjj';

    bookApiService.getBookById(id).subscribe({
        next: ()=> fail('should have failed with 404 error'),
        error: (error: HttpErrorResponse) => {
            expect(error.status).toEqual(404)
            expect(error.message).toContain('Not Found')
        }
    })

    const req = httpControler.expectOne({
        method: 'GET',
        url: `${url}/books/${id}`
    })

    req.flush('Not Found', {
        status: 404, statusText: 'Not Found'
    })
  })
});
