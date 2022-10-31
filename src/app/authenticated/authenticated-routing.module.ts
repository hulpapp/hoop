import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticatedComponent} from './authenticated.component';
import {VolunteerResolver} from "../core/resolvers/volunteer/volunteer.resolver";
import {UserLoggedGuard} from "../core/guards/logged/user-logged.guard";
import {EventsResolver} from "../core/resolvers/events/events.resolver";

const routes: Routes = [{
  path: '',
  component: AuthenticatedComponent,
  resolve: {volunteer: VolunteerResolver},
  canActivate: [UserLoggedGuard],
  children: [{
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
    {
      path: 'eventos',
      loadChildren: () => import('./events/events/events.module').then(m => m.EventsModule),
      resolve: {events: EventsResolver},

    },
    {path: '', redirectTo: 'eventos', pathMatch: 'full'},]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule {
}
