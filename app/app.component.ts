import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { PortfolioService } from './portfolio.service';
import { PortfolioComponent } from './portfolio.component';
import { HomeComponent } from './home.component';
import {PortfolioDetailComponent} from "./portfolio-detail.component";

@Component({
    selector: 'cv-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        PortfolioService
    ],
    styleUrls: ['app/app.component.css'],
})

@RouteConfig([
    {
        path: '/portfolio-detail/:id',
        name: 'PortfolioDetail',
        component: PortfolioDetailComponent
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: PortfolioComponent
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