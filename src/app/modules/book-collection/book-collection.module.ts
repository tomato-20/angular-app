import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionItemComponent } from './components/collection-item/collection-item.component';
import { BookCollectionComponent } from './book-collection.component';
import { CollectionApiService } from './service/book-collection-api.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { BOOK_COLLECTION_STATE, collectionItemReducer } from './store/collection.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CollectionEffects } from './store/collection.effect';

@NgModule({
  declarations: [CollectionItemComponent, BookCollectionComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(BOOK_COLLECTION_STATE, collectionItemReducer),
    EffectsModule.forFeature([CollectionEffects]),
    SharedModule,
  ],
  exports: [CollectionItemComponent, BookCollectionComponent],
  providers: [CollectionApiService],
})
export class BookCollectionModule {}
