import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule, isDevMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TodosComponent } from './components/todos/todos.component';
import { CounterComponent } from './components/counter/counter.component';
import { reducers } from 'src/app/store/reducers';
import { effects } from 'src/app/store/effects';
import { BookListModule } from './components/book-list/book-list.module';
import { SimpleCounterComponent } from './components/counter/components/simple-counter/simple-counter.component';
import { NgrxCounterComponent } from './components/counter/components/ngrx-counter/ngrx-counter.component';
import { CounterModule } from './components/counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([...effects]),
    HttpClientModule,
    BookListModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
