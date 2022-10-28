import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {catchError, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  getVolunteer(id: any): Observable<any> {
    return this.http.get(this.apiBaseUrl+'/volunteers/'+id).pipe(
      map((response: any) => response),
      catchError(err => { throw err })
    );
  }



}
