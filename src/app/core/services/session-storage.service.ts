import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }


    set(key: string, value: any) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
    get(key: string) {
        return JSON.parse(sessionStorage.getItem(key)||'{}');
    }
    delete(key: string) {
        sessionStorage.removeItem(key);
    }
    update(key: string, value: any) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
    saveObject(obj: any) {

        for (let key in obj) {
            sessionStorage.setItem(key, JSON.stringify(obj[key]));
        }


    }

    getDecodedAccessToken(token: string): any {
        try{
            return jwt_decode(sessionStorage.getItem(token)||'{}');
        }
        catch(Error){
            return null;
        }
    }
    getExpirationDate(): Date | boolean {
          const decoded = this.getDecodedAccessToken('token');

        if(decoded){
          const date = new Date(0);
          date.setUTCSeconds(decoded.exp);
          return date;
        }else
          return false;
    }


  clear() {
    sessionStorage.clear();
  }
}
