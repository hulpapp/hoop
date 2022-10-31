import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {catchError, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GambisService {

  apiBaseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  inscrever(gambi: any) {
    return this.http.post(this.apiBaseUrl+'/gambis', gambi).pipe(
      map(data => data),
      catchError(err => err)
    );
  }
  getVolHasINscricao(vol: number) {
    return this.http.get(this.apiBaseUrl+'/gambis/vol/'+vol).
    pipe(
      map(data => data),
      catchError(err => err)
    );
  }




}
