import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {catchError, map, Observable} from "rxjs";
import {EventBase} from "../../models/event";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }

  apiBaseUrl =  environment.apiBaseUrl;


  getEvents(): Observable<EventBase[]> {
    return this.http.get(this.apiBaseUrl + '/events').pipe(
      map((response: any) => response),
      catchError(err => { throw err })
    )
  }


}
