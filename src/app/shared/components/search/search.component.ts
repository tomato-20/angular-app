import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchKey: string = '';
  @Output() search = new EventEmitter<string>();

  onSubmit() {
    console.log(this.searchKey);
    this.search.emit(this.searchKey);
  }

  constructor() {}
}
