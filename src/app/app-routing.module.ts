import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: 'autenticacao', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  {path:'', redirectTo: 'autenticacao', pathMatch: 'full'},
  { path: 'hoop', loadChildren: () => import('./authenticated/authenticated.module').then(m => m.AuthenticatedModule) }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
