import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  BookReadingStatusEnum,
  CollectionItem,
} from '../../model/CollectonItem';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss'],
})
export class CollectionItemComponent {
  @Input() book!: CollectionItem;
  @Output() remove = new EventEmitter<string>();
  @Output() changeBookStatus = new EventEmitter<CollectionItem>();
  isOpen: boolean = false;
  readingStatusTypes= BookReadingStatusEnum;

  isStringKey(key: string) {
    return isNaN(Number(key))
  }

  isSelected(readingStatusValue: BookReadingStatusEnum) {
    return readingStatusValue === this.book.readingStatus;
  }

  onSaveChange(selectValue: string) {
    console.log('selected:' + selectValue)
    if (parseInt(selectValue) != this.book.readingStatus) {
      let updatedBook = {...this.book, readingStatus: parseInt(selectValue)} as CollectionItem
      this.changeBookStatus.emit(updatedBook);
    }
    this.isOpen = false;
  }

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  constructor() {
  }
}
