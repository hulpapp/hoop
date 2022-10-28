import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from './events.component';
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [{path: '', component: EventsComponent},
                        {path: 'detalhes', component: DetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {
}
