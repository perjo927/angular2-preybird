import { Component, OnInit } from 'angular2/core';
import { IconComponent } from "../icon/icon.component";

@Component({
    selector: 'programmer-per-home',
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css'],
    directives: [IconComponent]
})

export class HomeComponent implements OnInit {

    constructor() {}

    ngOnInit()  {
        console.log("Hello, World.")
    }
}