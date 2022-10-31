import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import { DetailComponent } from './detail/detail.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {NgxMaskModule} from "ngx-mask";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    EventsComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxMaterialTimepickerModule.setLocale('pt-BR'),
    NgxMaskModule,
    MatSelectModule
  ]
})
export class EventsModule { }
