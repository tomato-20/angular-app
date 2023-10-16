import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { TodosComponent } from './components/todos/todos.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookAdminComponent } from './components/book-admin/book-admin.component';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent,
  },
  { path: 'todos', component: TodosComponent },
  {
    path: 'books', component: BookListComponent
  },
  {
    path: 'admin/books', component: BookAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
