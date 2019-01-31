import { LogoutService } from './../../seguranca/logout.service';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../seguranca/auth.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  exibindoMenu = false;
  constructor(
    public auth: AuthService,
    private logoutService: LogoutService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    return this.logoutService.logout()
    .then(() => this.router.navigate(['/login']));
  }
}
