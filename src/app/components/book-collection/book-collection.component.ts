import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { CollectionItemActions } from './store/collection.action';
import { Observable, map, of } from 'rxjs';
import { selectCollectionItems } from './store/collection.selector';
import { CollectionItem } from './model/CollectonItem';
import { BookReadingStatusEnum } from './model/CollectonItem';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
})
export class BookCollectionComponent {
  collection$: Observable<readonly CollectionItem[]> = of([]);
  bookIdCollection: ReadonlyArray<string> = [];
  categories: string[] = Object.keys(BookReadingStatusEnum).filter((key) =>
    isNaN(Number(key))
  );
  selectedCategory: number = 999; //default for all items

  onCategorySelect(i: number) {
    if (i === 999) {
      this.selectedCategory = 999;
      this.collection$ = this.store.select(selectCollectionItems);
      return;
    }

    this.collection$ = this.store
      .select(selectCollectionItems)
      .pipe(map((items) => items.filter((item) => item.readingStatus == i)));
    this.selectedCategory = i;
  }

  onRemove(bookId: string): void {
    this.store.dispatch(CollectionItemActions.removeItem({ bookId }));
  }

  onBookStateChange(book: CollectionItem) {
    console.log(book)
    this.store.dispatch(
      CollectionItemActions.changeReadingStatus({
        item: book
      })
    );
  }

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(CollectionItemActions.loadAllItems());
    this.collection$ = this.store.select(selectCollectionItems);
  }
}
