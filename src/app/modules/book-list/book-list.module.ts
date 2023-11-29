import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { BookCollectionModule } from '../book-collection/book-collection.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BooksApiService } from './service/books-api.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { BOOK_LIST_STATE, booksreducer } from './store/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/books.effect';

@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    BookCollectionModule,
    SharedModule,
    StoreModule.forFeature(BOOK_LIST_STATE, booksreducer),
  
    EffectsModule.forFeature([BookEffects]),
  ],
  exports: [BookListComponent],
  providers: [BooksApiService],
})
export class BookListModule {}
