import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './modules/counter/counter.component';
import { TodosComponent } from './modules/todos/todos.component';
import { BookListComponent } from './modules/book-list/book-list.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { canMatchAdminRoleGuard } from '@core/auth/guards/canMatchAdminRole.guard';
import { canActivateBook } from './core/auth/guards/canActivateBook.guard';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent,
  },
  { path: 'todos', component: TodosComponent },
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'home',
    canActivate : [canActivateBook],
    canMatch: [canMatchAdminRoleGuard],
    loadChildren: () =>
      import('./modules/book-admin/book-admin.module').then(
        (m) => m.BookAdminModule
      ),
  },
  {
    path: 'home',
    component: BookListComponent,
    canActivate: [canActivateBook]
  },
  {
    path: '',
    redirectTo: '/account/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
