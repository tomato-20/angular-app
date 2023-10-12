import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginatePipe } from './pipes/paginate/paginate.pipe';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [PaginationComponent, PaginatePipe, SearchComponent, ModalComponent],
  imports: [CommonModule,FormsModule],
  exports: [SearchComponent, PaginationComponent, PaginatePipe, ModalComponent]
})
export class SharedModule {}
