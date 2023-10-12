import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { BookCollectionModule } from '../book-collection/book-collection.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BooksApiService } from './service/books-api.service';


@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    BookCollectionModule,
    SharedModule
  ],
  exports : [BookListComponent],
  providers: [BooksApiService]
})
export class BookListModule { }
