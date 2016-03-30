import { Navigation } from './navigation';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../per/about.component';
import { BlogComponent } from '../blog/blog.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ProjectDetailComponent } from "../portfolio/project-detail.component";
import { CvDetailComponent } from "../cv/cv-detail.component";
import { CvComponent } from "../cv/cv.component";
import { SocialDetailComponent } from "../social/social-detail.component";
import { SocialComponent } from "../social/social.component";
import { SkillsDetailComponent } from "../skills/skills-detail.component";
import { SkillsComponent } from "../skills/skills.component";

export var NAVIGATION: Navigation[] = [
    {
        path: '/home',
        name: 'Home',
        link: ['Home'],
        component: HomeComponent,
        useAsDefault: true
    },

    {
        path: '/per',
        name: 'Per',
        link: ['Per'],
        component: AboutComponent,
        "useAsDefault": false
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

    {
        path: '/social-detail/:id',
        name: 'SocialDetail',
        link: null,
        component: SocialDetailComponent,
        "useAsDefault": false
    },
    {
        path: '/social',
        name: 'Social',
        link: ['Social'],
        component: SocialComponent,
        "useAsDefault": false
    },

    {
        path: '/skills-detail/:id',
        name: 'SkillsDetail',
        link: null,
        component: SkillsDetailComponent,
        "useAsDefault": false
    },
    {
        path: '/skills',
        name: 'Skills',
        link: ['Skills'],
        component: SkillsComponent,
        "useAsDefault": false
    },

    {
        path: '/cv-detail/:id',
        name: 'CvDetail',
        link: null,
        component: CvDetailComponent,
        "useAsDefault": false
    },
    {
        path: '/cv',
        name: 'Cv',
        link: ['Cv'],
        component: CvComponent,
        "useAsDefault": false
    },

    {
        path: '/blog',
        name: 'Blog',
        link: ['Blog'],
        component: BlogComponent,
        "useAsDefault": false
    }
];

