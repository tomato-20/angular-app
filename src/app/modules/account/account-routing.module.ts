import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ],
  },
];


@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule {
    
}
