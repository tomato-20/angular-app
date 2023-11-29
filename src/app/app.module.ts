import { NgModule, isDevMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './modules/todos/todos.component';
import { BookListModule } from './modules/book-list/book-list.module';
import { CounterModule } from './modules/counter/counter.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BookAdminModule } from './modules/book-admin/book-admin.module';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AccountModule } from './modules/account/account.module';
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [AppComponent, TodosComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    NavbarComponent,
    BookListModule,
    CounterModule,
    BookAdminModule,
    AccountModule,
    NoopAnimationsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
