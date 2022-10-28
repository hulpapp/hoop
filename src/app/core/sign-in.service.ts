import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {SessionStorageService} from "./services/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  apiBaseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient, private sessionStorage: SessionStorageService) { }

  signIn(user: any): Observable<any> {
    return this.http.post(this.apiBaseUrl+'/login', user).pipe(
      map((response: any) => { this.sessionStorage.saveObject(response); return response}),
      catchError(error => of(`${error.status}`))
    );
  }




}
