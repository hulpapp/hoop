import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {SessionStorageService} from "../services/session-storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private sessionStorage: SessionStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.includes('login') && !request.url.includes('signup')) {
      request = request.clone({   setHeaders: { authorization: this.sessionStorage.get('token')  }  });
    }





    return next.handle(request);
  }
}
