import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent as AddBookComponent } from './components/add/add.component';
import { ListComponent as ListBooksComponent } from './components/list/list.component';
import { BookAdminComponent } from './book-admin.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: BookAdminComponent,
    children: [
      {
        path: 'add',
        component: AddBookComponent,
      },
      {
        path: 'list',
        component: ListBooksComponent,
      },
      {
        path: 'edit/:id',
        component: EditComponent,
      },
      {
        path: '',
        component: ListBooksComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookAdminRoutingModule {}
