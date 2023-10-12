import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './models/todos.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
 todos$!: Observable<Todo[]>

}
