import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HomeComponent } from './home.component';
import {HeroDetailComponent} from "./hero-detail.component";

@Component({
    selector: 'cv-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ],
    styleUrls: ['app/app.component.css'],
})

@RouteConfig([
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true
    }
])

export class AppComponent {
    title = "Programmer Per";
}