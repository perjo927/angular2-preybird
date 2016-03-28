import { Navigation } from './navigation';
import { HomeComponent } from '../home/home.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ProjectDetailComponent } from "../portfolio/project-detail.component";

export var NAVIGATION: Navigation[] = [
    {
        path: '/home',
        name: 'Home',
        link: ['Home'],
        component: HomeComponent,
        useAsDefault: true
    },
    {
        path: '/project-detail/:id',
        name: 'ProjectDetail',
        link: null,
        component: ProjectDetailComponent,
        "useAsDefault": false
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        link: ['Portfolio'],
        component: PortfolioComponent,
        "useAsDefault": false
    },

    //{
    //    path: '/social-detail/:id',
    //    name: 'SocialDetail',
    //    component: SocialDetailComponent,
    //    "useAsDefault": false
    //},
    //{
    //    path: '/social',
    //    name: 'Social',
    //    component: SocialComponent,
    //    "useAsDefault": false
    //},
    //
    //{
    //    path: '/cv-detail/:id',
    //    name: 'CvDetail',
    //    component: CvDetailComponent,
    //    "useAsDefault": false
    //},
    //{
    //    path: '/cv',
    //    name: 'Cv',
    //    component: CvComponent
    //},
    //
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
    //
    //{
    //    path: '/per',
    //    name: 'Per',
    //    component: PerComponent
    //},
    //
    //{
    //    path: '/blog',
    //    name: 'Blog',
    //    component: BlogComponent
    //}
];

