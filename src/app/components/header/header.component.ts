import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  navLinks: MegaMenuItem[];
  activeLink: MegaMenuItem;
  constructor() {
    this.navLinks = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home',
        styleClass: 'home-button',
      },
      { label: 'Expenses', routerLink: 'expenses/dashboard' },
      {
        label: 'Admin',
        routerLink: 'admin/users',
      },
      {
        label: 'Login',
        routerLink: 'auth/login',
      },
      //   {
      //     label: 'Logout',
      //     routerLink: 'auth/logout',
      //   },
      //   {
      //     label: 'Sign Up',
      //     routerLink: 'auth/signup',
      //   },
    ];
    this.activeLink = this.navLinks[0];
  }

  ngOnInit(): void {}
}
