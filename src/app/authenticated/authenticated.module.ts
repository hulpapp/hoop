import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { AuthenticatedComponent } from './authenticated.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AuthenticatedComponent
  ],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
    AuthenticatedRoutingModule,
    MatButtonModule
  ]
})
export class AuthenticatedModule { }
