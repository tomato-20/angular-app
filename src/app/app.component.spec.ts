import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodosComponent } from './components/todos/todos.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BookCollectionComponent } from './components/book-collection/book-collection.component';

describe('AppComponent', () => {

  let fixture:ComponentFixture<AppComponent>;
  let appComponent: AppComponent;

  const routes: Routes = [
    {
      path: 'counter',
      component: CounterComponent,
    },
    { path: 'todos', component: TodosComponent },
    {
      path: 'books',
      component: BookListComponent,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([...effects]),
        HttpClientModule,
        SharedModule,
      ],
      declarations: [
        AppComponent,
        TodosComponent,
        CounterComponent,
        BookListComponent,
        BookCollectionComponent,
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
  });

  it('should create the app', () => {
    const appComponent = fixture.componentInstance;
    expect(appComponent).toBeTruthy();
  });

  it(`should have as title 'ngrx-demo'`, () => {
    expect(appComponent.title).toEqual('ngrx-demo');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'ngrx-demo'
    );
  });
});
