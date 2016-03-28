import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_PROVIDERS } from 'angular2/router';
import { NAVIGATION } from './navigation/navigation.data';
import { NavigationComponent } from "./navigation/navigation.component";
import { NavigationService } from "./navigation/navigation.service";
import { PortfolioService } from './portfolio/portfolio.service';


@Component({
    selector: 'programmer-per-app',
    templateUrl: 'app/app.component.html',
    directives: [NavigationComponent],
    providers: [
        ROUTER_PROVIDERS,
        PortfolioService,
        NavigationService
    ],
    styleUrls: ['app/app.component.css'],
})

@RouteConfig(NAVIGATION)

export class AppComponent {
}