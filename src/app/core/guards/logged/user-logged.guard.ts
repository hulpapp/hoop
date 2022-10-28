import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {SessionStorageService} from "../../services/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class UserLoggedGuard implements CanActivate {

  constructor(private sessionStorage: SessionStorageService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const today = new Date();
    const expirationDate = this.sessionStorage.getExpirationDate();
    if (expirationDate) {
      return today < expirationDate;
    }else {
      this.router.navigate(['../autenticacao/login']);
      return false;
    }

  }




}
