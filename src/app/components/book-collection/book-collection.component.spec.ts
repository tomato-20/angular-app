import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookCollectionComponent } from './book-collection.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { mockCollectionItemArray } from 'src/mocks/mockDatas';
import { AppState } from 'src/app/store/app.state';
import { MemoizedSelector } from '@ngrx/store';
import { selectCollectionItems } from './store/collection.selector';
import { CollectionItem } from './model/CollectonItem';
import {
  Component,
  DebugElement,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { By } from '@angular/platform-browser';
import { CollectionItemActions } from './store/collection.action';

@Component({
  selector: 'app-collection-item',
  template: '<div></div>',
})
class MockCollectionItem {
  @Input() book!: CollectionItem[];
  @Output() remove = new EventEmitter<string>();
  isOpen: boolean = false;
  onSaveChange() {}

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}

describe('Book Collection Component', () => {
  let fixture: ComponentFixture<BookCollectionComponent>;
  let component: BookCollectionComponent;
  let mockStore: MockStore<AppState>;
  let mockCollectionItemsSelector: MemoizedSelector<AppState, CollectionItem[]>;
  let collectionDe: DebugElement;

  // //  way 1
  // const initialState = {
  //   books: { items: [], loading: false, error: '' } as BookListState,
  //   collection: [] as ReadonlyArray<string>,
  //   collectionItemList: {
  //     items: [],
  //     loading: false,
  //     error: '',
  //   } as BookCollectionState,
  // } as AppState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookCollectionComponent, MockCollectionItem],
      //  way 1
      //  providers: [provideMockStore({ initialState })],
      providers: [provideMockStore()],
    });

    fixture = TestBed.createComponent(BookCollectionComponent);
    component = fixture.componentInstance;
    collectionDe = fixture.debugElement;

    mockStore = TestBed.inject(MockStore);
    mockCollectionItemsSelector = mockStore.overrideSelector(
      selectCollectionItems,
      []
    );

    spyOn(mockStore, 'dispatch').and.callFake(() => {});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of collection items after the data is loaded', () => {
    // initially no items in collectionItemState
    component.collection$.subscribe((allItems) =>
      expect(allItems.length).toBe(0)
    );

    // //way 1 set initial load values to mock store
    // const loadState: AppState = {
    //   ...initialState,
    //   collectionItemList: {
    //     items: mockCollectionItemArray,
    //     loading: false,
    //     error: '',
    //   },
    // };
    // mockStore.setState(loadState);

    mockCollectionItemsSelector.setResult(mockCollectionItemArray);
    mockStore.refreshState();
    fixture.detectChanges();

    component.collection$.subscribe((allItems) => {
      expect(allItems.length).toBe(mockCollectionItemArray.length);
    });

    let collectionItemsEl = collectionDe.queryAll(By.css('.book-item'));
    expect(collectionItemsEl.length).toEqual(mockCollectionItemArray.length);
  });

  describe('Category selection', () => {
    let categoriesListDe: DebugElement[];
    let expectedLengths: number[] = [4, 2, 1, 1];
    beforeEach(() => {
      mockCollectionItemsSelector.setResult(mockCollectionItemArray);
      mockStore.refreshState();
      fixture.detectChanges();
      categoriesListDe = collectionDe.queryAll(By.css('.nav-tabs li'));
    });

    it('should display all books in collection when all category is selected', () => {
      categoriesListDe.forEach((category, index) => {
        category.triggerEventHandler('click');
        fixture.detectChanges();
        component.collection$.subscribe((items) =>
          expect(items.length).toEqual(expectedLengths[index])
        );
      });
    });
  });

  describe('Action Dispatch', () => {
    let selectedItem = mockCollectionItemArray[0];

    beforeEach(() => {
      mockCollectionItemsSelector.setResult(mockCollectionItemArray);
      mockStore.refreshState();
      fixture.detectChanges();
    });

    it('should  dispatch removeItem action when onRemove() function is called', () => {
      component.onRemove(selectedItem.id);

      expect(mockStore.dispatch).toHaveBeenCalledWith(
        CollectionItemActions.removeItem({ bookId: selectedItem.id })
      );
      // expect(mockStore.dispatch).toHaveBeenCalledOnceWith(
      //   CollectionItemActions.removeItem({ bookId: selectedItem.id })
      // );
    });

    it('should  dispatch changeReadingStatus action when obBookStateChange() function is called', () => {
      let modifiedItem = { ...selectedItem, readingStatus: 1 };
      component.onBookStateChange(modifiedItem);
      expect(mockStore.dispatch).toHaveBeenCalledWith(
        CollectionItemActions.changeReadingStatus({
          item: modifiedItem
        })
      );
      // expect(mockStore.dispatch).toHaveBeenCalledOnceWith(
      //   CollectionItemActions.changeReadingStatusSuccess({
      //     bookId: modifiedItem.id,
      //     readingStatus: modifiedItem.readingStatus,
      //   })
      // );
    });
  });
});
