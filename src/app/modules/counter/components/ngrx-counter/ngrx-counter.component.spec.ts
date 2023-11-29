import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCounterComponent } from './ngrx-counter.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '@core/store/app.state';
import { MemoizedSelector } from '@ngrx/store';
import { BookListState } from 'src/app/modules/book-list/state/book.state';
import { BookCollectionState } from 'src/app/modules/book-collection/state/book-collection.state';
import { By } from '@angular/platform-browser';
import * as counterActions from './store/counter.actions';

describe('NgrxCounterComponent', () => {
  let component: NgrxCounterComponent;
  let fixture: ComponentFixture<NgrxCounterComponent>;
  let mockStore: MockStore<AppState>;

  const initialState = {
    count: 0,
    books: { items: [], loading: false, error: '' } as BookListState,
    collection: [] as ReadonlyArray<string>,
    collectionItemList: {
      items: [],
      loading: false,
      error: '',
    } as BookCollectionState,
  } as AppState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxCounterComponent],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(NgrxCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockStore = TestBed.inject(MockStore);
    spyOn(mockStore, 'dispatch').and.callFake(() => {});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set render count on load', () => {
    let spanDe: HTMLElement = fixture.debugElement.query(
      By.css('span')
    ).nativeElement;
    expect(spanDe.textContent).toEqual(' Count : ' + '0 ');
  });

  it('increment method should dispatch increment action', () => {
    component.increment();
    expect(mockStore.dispatch).toHaveBeenCalledOnceWith(
      counterActions.increment()
    );
  });

  it('decrement method should dispatch decrement action', () => {
    component.decrement();
    expect(mockStore.dispatch).toHaveBeenCalledOnceWith(
      counterActions.decrement()
    );
  });

  it('reset method should dispatch reset action', () => {
    component.reset();
    expect(mockStore.dispatch).toHaveBeenCalledOnceWith(counterActions.reset());
  });

  it('should render the UI when store changes', () => {
    mockStore.setState({
      ...initialState,
      count: 6,
    });
    fixture.detectChanges()
    
    let spanDe: HTMLElement = fixture.debugElement.query(
      By.css('span')
    ).nativeElement;
    expect(spanDe.textContent).toEqual(' Count : ' + '6 ');
  });
});
