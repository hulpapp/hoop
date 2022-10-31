import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  apiBaseUrl = environment.apiBaseUrl;

  signUp(user: any): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/signup',user).pipe(
      map((response: any) => response),
      catchError(error => of(`${error.status}`))
    );
  }




}
