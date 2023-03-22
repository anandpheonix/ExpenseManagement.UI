import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styles: [],
})
export class FooterComponent implements OnInit {
    currentYear = new Date().getFullYear();
    date = new Date();

    constructor() {}

    ngOnInit(): void {}
}
