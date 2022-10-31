import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from './events.component';
import {DetailComponent} from './detail/detail.component';
import {VolunteerResolver} from "../../../core/resolvers/volunteer/volunteer.resolver";

const routes: Routes = [{path: '', component: EventsComponent},
                        {path: 'detalhes/:id', component: DetailComponent, resolve: {volunteer: VolunteerResolver}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {
}
