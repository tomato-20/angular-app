import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionItemComponent } from './components/collection-item/collection-item.component';
import { BookCollectionComponent } from './book-collection.component';
import { CollectionApiService } from './service/book-collection-api.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CollectionItemComponent, BookCollectionComponent],
  imports: [CommonModule, SharedModule],
  exports: [CollectionItemComponent, BookCollectionComponent],
  providers: [CollectionApiService],
})
export class BookCollectionModule {}
