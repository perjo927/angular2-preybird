import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HomeComponent } from './home/home.component';
import { PortfolioService } from './portfolio/portfolio.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioDetailComponent } from "./portfolio/portfolio-detail.component";

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
        path: '/home',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true
    },
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
    //{
    //    path: '/social-detail/:id',
    //    name: 'SocialDetail',
    //    component: SocialDetailComponent
    //},
    //{
    //    path: '/social',
    //    name: 'Social',
    //    component: SocialComponent
    //},

    //{
    //    path: '/cv-detail/:id',
    //    name: 'CvDetail',
    //    component: CvDetailComponent
    //},
    //{
    //    path: '/cv',
    //    name: 'Cv',
    //    component: CvComponent
    //},

    //{
    //    path: '/skills-detail/:id',
    //    name: 'SkillsDetail',
    //    component: SkillsDetailComponent
    //},
    //{
    //    path: '/skills',
    //    name: 'Skills',
    //    component: SkillsComponent
    //},

    //{
    //    path: '/per',
    //    name: 'Per',
    //    component: PerComponent
    //},

    //{
    //    path: '/blog',
    //    name: 'Blog',
    //    component: BlogComponent
    //}
])

export class AppComponent {
    title = "Programmer Per";
}