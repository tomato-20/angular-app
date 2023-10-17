
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { mockCollectionItem, mockCollectionItemArray } from 'src/mocks/mockDatas';
import { HttpErrorResponse } from '@angular/common/http';
import { CollectionApiService } from './book-collection-api.service';
import { CollectionItem } from '../model/CollectonItem';


describe('Book Collection Api Service', () => {
  let url = 'http://localhost:3000';
  let httpControler: HttpTestingController;
  let collectionApiService: CollectionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CollectionApiService],
    });

    httpControler = TestBed.inject(HttpTestingController);
    collectionApiService = TestBed.inject(CollectionApiService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpControler.verify();
  });

  it('should call getCollection method and return array of book', (done: DoneFn) => {
    // check if correct result is returned
    collectionApiService.getCollection().subscribe({
      next: (books) => {
        expect(books).toEqual(mockCollectionItemArray);
        done();
      },
    });

    //  check if correct method and api endpoint is hit
    const req = httpControler.expectOne({
      method: 'GET',
      url: `${url}/collections`,
    });

    req.flush(mockCollectionItemArray);
  });

  it('should call getCollectionItemById method and return a book', () => {
    const id: string = 'yrVEBsjWiBcC';

    collectionApiService
      .getCollectionItemById(id)
      .subscribe((book) => expect(book).toEqual(mockCollectionItem));

    const req = httpControler.expectOne({
      method: 'GET',
      url: `${url}/collections/${id}`,
    });

    req.flush(mockCollectionItem);
  });

  it('should call getCollectionItemById method and throw error response for non existant book', () => {
    const id: string = 'djkjhdhjj';

    collectionApiService.getCollectionItemById(id).subscribe({
      next: () => fail('should have failed with 404 error'),
      error: (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.message).toContain('Not Found');
      },
    });

    const req = httpControler.expectOne({
      method: 'GET',
      url: `${url}/collections/${id}`,
    });

    req.flush('Not Found', {
      status: 404,
      statusText: 'Not Found',
    });
  });

  it('should call addToCollection method and return a book', () => {
    collectionApiService.addToCollection(mockCollectionItem).subscribe((book) => {
      expect(book).toEqual(mockCollectionItem);
    });

    const req = httpControler.expectOne({
      method: 'POST',
      url: `${url}/collections`,
    });

    expect(req.request.headers.get('Content-Type')).toEqual('application/json');
    req.flush(mockCollectionItem);
  });

  it('should call removeFromCollection method and hit delete request', () => {

    collectionApiService.removeFromCollection(mockCollectionItem.id).subscribe();

    const req = httpControler.expectOne({
      method: 'DELETE',
      url: `${url}/collections/${mockCollectionItem.id}`,
    });

    req.flush(mockCollectionItem.id);
  });

  it('should call updateReadingStatus method and return updated item on success', () => {
    let updatedStatus = 2;
    let item = mockCollectionItem;
    let modifiedItem : CollectionItem = {
      ...item,
      readingStatus: updatedStatus
    }
    collectionApiService.updateReadingStatus(item.id, updatedStatus).subscribe(book => {
      expect(book.readingStatus).toEqual(updatedStatus)
    })

    const req = httpControler.expectOne({
      method: 'PATCH',
      url: `${url}/collections/${item.id}`
    })

    expect(req.request.headers.get('Content-Type')).toEqual('application/json')
    req.flush(modifiedItem)
  })
});