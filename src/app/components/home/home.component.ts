import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor() {}
}

@Component({
  selector: 'not-found',
  template:
    '<h2 style="text-align:center ; margin-top: 50px;"><strong>404. Page Not Found</strong></h2>',
})
export class NotFoundComponent {}
