import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {VolunteerService} from "../../services/volunteer/volunteer.service";
import {SessionStorageService} from "../../services/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class VolunteerResolver implements Resolve<boolean> {

  constructor(private volunteerService: VolunteerService, private sessionStorage: SessionStorageService) { }




  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    const token = this.sessionStorage.getDecodedAccessToken('token');
    const id = token.volunteer_id;
    return this.volunteerService.getVolunteer(id);

  }
}
