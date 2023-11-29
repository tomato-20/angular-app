import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/core/store/app.state';
import { Book } from '@app/modules/book-list/model/books.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookAdminActions } from '../../store/book-admin.action';
import { selectBooks } from '../../store/book-admin.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = [
    'title',
    'description',
    'authors',
    'smallThumbnail',
    'thumbnail',
    'controlBtn'
  ];
  books$!: Observable<readonly Book[]>;

  constructor(private strore: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.strore.dispatch(BookAdminActions.loadBooks());
    this.books$ = this.strore.select(selectBooks);
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete?')) {
      this.strore.dispatch(BookAdminActions.deleteBook({ id }));
    }
  }

  onEdit(id: string) {
    this.router.navigate(['/home', `edit`, id]);
  }
}
