import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageType } from './page.type';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() perPage?: number;
  @Input() totalItems: number = 0;

  @Output() onPageChange = new EventEmitter<PageType>();

  pageOptions: PageType = {
    currentPage: 0,
    perPage: 4,
  };

  onPageNext() {
    if (!this.isLastPage()) {
      this.pageOptions.currentPage += 1;
      this.onPageChange.emit(this.pageOptions);
    }
  }

  onPagePrev() {
    if (!this.isFirstPage()) {
      this.pageOptions.currentPage -= 1;
      this.onPageChange.emit(this.pageOptions);
    }
  }

  isFirstPage() {
    if (this.pageOptions.currentPage == 0) return true;
    else return false;
  }

  getMaxPage(): number {
    let remItems = this.totalItems % this.pageOptions.perPage;
    let fullPages = Math.floor(this.totalItems / this.pageOptions.perPage);
    return remItems == 0 ? fullPages : fullPages + 1;
  }

  isLastPage() {
    if (this.pageOptions.currentPage == this.getMaxPage() - 1) {
      return true;
    }
    return false;
  }

  createPageNoRange() {
    return new Array(this.getMaxPage());
  }

  selectPage(i: number) {
    this.pageOptions.currentPage = i;
    // console.log('on page select: ', this.pageOptions)
    this.onPageChange.emit(this.pageOptions);
  }

  ngOnInit() {
    if (this.perPage) {
      this.pageOptions.perPage = this.perPage;
    }
  }
}
