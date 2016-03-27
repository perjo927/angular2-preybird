import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_PROVIDERS } from 'angular2/router';
import { HomeComponent } from './home/home.component';
import { PortfolioService } from './portfolio/portfolio.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectDetailComponent } from "./portfolio/project-detail.component";
import { NavigationComponent } from "./navigation/navigation.component";

@Component({
    selector: 'programmer-per-app',
    templateUrl: 'app/app.component.html',
    directives: [NavigationComponent],
    providers: [
        ROUTER_PROVIDERS,
        PortfolioService
        // TODO: NavigationService, RouteService
    ],
    styleUrls: ['app/app.component.css'],
})

// TODO: NavigationService? Route extends Navigation?
@RouteConfig([
    {
        path: '/home',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true
    },
    {
        path: '/project-detail/:id',
        name: 'ProjectDetail',
        component: ProjectDetailComponent
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