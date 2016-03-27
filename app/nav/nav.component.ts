import { Component, Input, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
//import { Nav } from './nav';
//import { NavService } from './nav.service';


@Component({
    selector: 'navigation',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/nav/nav.component.html',
    styleUrls: ['app/nav/nav.component.css']
})

export class NavComponent {

}