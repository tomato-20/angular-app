import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule} from '@angular/material/table';
import { StoreModule } from '@ngrx/store';

import { BookListModule } from '../book-list/book-list.module';
import { ListComponent } from './components/list/list.component';
import { BookAdminRoutingModule } from './book-admin-routing.module';
import { BOOK_ADMIN_STATE, bookAdminReducer } from './store/book-admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookAdminEffects } from './store/book-admin.effect';
import { EditComponent } from './components/edit/edit.component';
import { BookAdminComponent } from './book-admin.component';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    BookAdminComponent,
    AddComponent,
    ListComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    BookAdminRoutingModule,
    StoreModule.forFeature(BOOK_ADMIN_STATE, bookAdminReducer),
    EffectsModule.forFeature([BookAdminEffects]),
    ReactiveFormsModule,
    BookListModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
})
export class BookAdminModule {}
