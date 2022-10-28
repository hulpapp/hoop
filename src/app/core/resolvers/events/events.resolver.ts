import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import {EventsService} from "../../services/events/events.service";

@Injectable({
  providedIn: 'root'
})
export class EventsResolver implements Resolve<boolean> {

  constructor(private eventService: EventsService) {}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.eventService.getEvents();




  }
}
