import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookAdminComponent } from './book-admin.component';
import { AddComponent } from './components/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BookAdminComponent, AddComponent],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
})
export class BookAdminModule {}
