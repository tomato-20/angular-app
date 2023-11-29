import { Component } from '@angular/core';
import { Book } from './model/books.model';
import { Observable, map, of } from 'rxjs';
import { count, filter } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { selectBooks } from './store/books.selector';
import { CollectionItemActions } from '../book-collection/store/collection.action';
import { BooksApiActions } from './store/books.action';
import { selectCollectionItems } from '../book-collection/store/collection.selector';
import { PageType } from 'src/app/shared/components/pagination/page.type';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books$: Observable<readonly Book[]> = of([]);
  page: PageType = {
    currentPage: 0,
    perPage: 12,
  };

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(BooksApiActions.loadBooksList());
    this.books$ = this.store.select(selectBooks);
  }

  isInCollection(bookId: string): Observable<boolean> {
    return this.store.pipe(
      select(selectCollectionItems),
      map((items) => items.find((book: Book) => book.id === bookId)),
      map((book) => {
        if (!!book) return true;
        return false;
      })
    );
  }

  getTotalNoOfItems(): number {
    let totalItems = 0;
    // this.books$.pipe(count()).subscribe((count) => {
    //   console.log(count);
    //   totalItems = count;
    // });
    this.books$.subscribe((books) => {
      totalItems = books.length;
    });
    return totalItems;
  }

  onAddFromCollection(book: Book): void {
    this.store.dispatch(CollectionItemActions.addItem({ book }));
  }

  onRemove(bookId: string): void {
    this.store.dispatch(CollectionItemActions.removeItem({ bookId }));
  }

  onSearch(key: string): void {
    if (!key) {
      this.books$ = this.store.select(selectBooks);
    } else {
      this.books$ = this.store.select(selectBooks).pipe(
        map((books) =>
          books.filter((book) => {
            const { title, authors } = book.volumeInfo;
            return (
              title.toLowerCase().includes(key.toLowerCase().trim()) ||
              (authors
                ? authors.reduce((prevResult, author) => {
                    let hasValue = author.toLowerCase().includes(key);
                    return hasValue || prevResult;
                  }, false)
                : false)
            );
          })
        )
      );
    }
    this.page.currentPage = 0;
  }

  onPageChange(page: PageType) {
    this.page = page;
  }


}
