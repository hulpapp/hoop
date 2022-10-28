import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    EventsComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class EventsModule { }
