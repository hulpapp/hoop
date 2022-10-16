import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
  [{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    {path:'' ,redirectTo: 'login',pathMatch: 'full' },
  { path: 'cadastrar', loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
