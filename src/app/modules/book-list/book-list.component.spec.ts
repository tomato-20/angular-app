import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '@core/store/app.state';
import { MemoizedSelector } from '@ngrx/store';
import { Book } from './model/books.model';
import { selectBooks } from './store/books.selector';
import {
  mockBook,
  mockBookArray,
  mockCollectionItem,
  mockCollectionItemArray,
} from 'src/mocks/mockDatas';
import { CollectionItem } from '../book-collection/model/CollectonItem';
import { selectCollectionItems } from '../book-collection/store/collection.selector';
import { PaginatePipe } from 'src/app/shared/pipes/paginate/paginate.pipe';
import { PageType } from 'src/app/shared/components/pagination/page.type';
import { of } from 'rxjs';
import { CollectionItemActions } from '../book-collection/store/collection.action';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search',
  template: '<div></div>',
})
class SearchComponentStub {
  searchKey: string = '';
  @Output() search = new EventEmitter<string>();
}

@Component({
  selector: 'app-book-collection',
  template: '<div></div>',
})
class BookCollectionComponentStub {}

@Component({
  selector: 'app-pagination',
  template: '<div></div>',
})
class PaginationComponentStub {
  @Input() perPage?: number;
  @Input() totalItems: number = 0;

  @Output() onPageChange = new EventEmitter<PageType>();

  pageOptions: PageType = {
    currentPage: 0,
    perPage: 4,
  };
}

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let mockStore: MockStore<AppState>;
  let mockBooksSelector: MemoizedSelector<AppState, readonly Book[]>;
  let mockCollectionItemsSelector: MemoizedSelector<AppState, CollectionItem[]>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookListComponent,
        SearchComponentStub,
        PaginationComponentStub,
        BookCollectionComponentStub,
        PaginatePipe,
      ],
      imports: [RouterTestingModule, MatIconModule],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;

    mockStore = TestBed.inject(MockStore);
    mockBooksSelector = mockStore.overrideSelector(selectBooks, []);
    mockCollectionItemsSelector = mockStore.overrideSelector(
      selectCollectionItems,
      []
    );
    spyOn(mockStore, 'dispatch').and.callFake(() => {});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display list of book on initial load', () => {
    component.books$.subscribe((allBooks) => {
      expect(allBooks.length).toBe(0);
    });

    mockBooksSelector.setResult(mockBookArray);
    mockStore.refreshState();
    fixture.detectChanges();
    component.books$.subscribe((allBooks) => {
      expect(allBooks.length).toBe(mockBookArray.length);
    });
  });

  describe('Helper Function', () => {
    beforeEach(() => {
      mockBooksSelector.setResult(mockBookArray);
      mockCollectionItemsSelector.setResult(mockCollectionItemArray);
      mockStore.refreshState();
      fixture.detectChanges();
    });

    it('should return total no of books', () => {
      component.books$ = of([...mockBookArray]);
      expect(component.getTotalNoOfItems()).toEqual(mockBookArray.length);
    });

    it('should return observarable of true if a book is in collection', () => {
      const bookInCollection = mockCollectionItem;
      component.isInCollection(bookInCollection.id).subscribe((value) => {
        expect(value).toBeTrue();
      });
    });

    it('should return observarable of false if a book is in collection', () => {
      const bookInCollection: Book = {
        id: 'jhsdkjfohhoghg',
        volumeInfo: {
          title: 'not in collection',
          authors: ['no author'],
          imageLinks: {
            smallThumbnail: '',
            thumbnail: '',
          },
        },
      };
      component.isInCollection(bookInCollection.id).subscribe((value) => {
        expect(value).toBeFalse();
      });
    });
  });

  describe('Search', () => {
    beforeEach(() => {
      mockBooksSelector.setResult(mockBookArray);
      mockStore.refreshState();
      fixture.detectChanges();
    });

    it('should filter books on search with some truthy key', () => {
      component.books$ = of(mockBookArray);
      fixture.detectChanges();

      component.onSearch(mockBookArray[0].volumeInfo.title);
      component.books$.subscribe((books) => {
        expect(books.length).toEqual(1);
      });
    });

    it('should return all books on search with some falsey or empty key', () => {
      component.onSearch('');
      component.books$.subscribe((books) => {
        expect(books.length).toEqual(mockBookArray.length);
      });
    });
  });

  it('should change page when page is changed', () => {
    component.page = {
      currentPage: 0,
      perPage: 8,
    };
    const changedValue = {
      ...component.page,
      currentPage: 8,
    };
    fixture.detectChanges();

    component.onPageChange(changedValue);
    fixture.detectChanges();

    expect(component.page).toBe(changedValue);
  });

  it('should dispatch action when add to collection btn is clicked', () => {
    component.onAddFromCollection(mockBook);
    expect(mockStore.dispatch).toHaveBeenCalledOnceWith(
      CollectionItemActions.addItem({ book: mockBook })
    );
  });
});
