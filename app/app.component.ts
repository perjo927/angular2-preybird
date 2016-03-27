import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import {HeroDetailComponent} from "./hero-detail.component";

@Component({
    selector: 'ng2-preybird-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Heroes']">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ],
    styleUrls: ['app/app.component.css'],
})

@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])

export class AppComponent {
    title = "Preybird's Heroes";
}