import {Component, HostListener, OnInit} from '@angular/core';
import {SessionStorageService} from "../core/services/session-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Volunteer} from "../core/models/volunteer";


@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss']
})
export class AuthenticatedComponent implements OnInit {

  constructor(private sessionStorage: SessionStorageService,private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.data.subscribe(data => { this.volunteer = data['volunteer']; });
    this.screen = window.innerWidth;
  }
  screen: any;
  volunteer: Volunteer | undefined;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screen = window.innerWidth;
  }


  ngOnInit(): void {
  }

  sidebarResponsive() {
    return this.screen < 768;
  }

  logout() {
    this.sessionStorage.clear();
    this.router.navigate(['../autenticacao/login']);
  }




}
