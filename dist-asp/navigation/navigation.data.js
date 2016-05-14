System.register(['../home/home.component', '../per/about.component', '../blog/blog.component', '../portfolio/portfolio.component', "../portfolio/project-detail.component", "../cv/cv-detail.component", "../cv/cv.component", "../social/social-detail.component", "../social/social.component", "../skills/skills-detail.component", "../skills/skills.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var home_component_1, about_component_1, blog_component_1, portfolio_component_1, project_detail_component_1, cv_detail_component_1, cv_component_1, social_detail_component_1, social_component_1, skills_detail_component_1, skills_component_1;
    var NAVIGATION;
    return {
        setters:[
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (blog_component_1_1) {
                blog_component_1 = blog_component_1_1;
            },
            function (portfolio_component_1_1) {
                portfolio_component_1 = portfolio_component_1_1;
            },
            function (project_detail_component_1_1) {
                project_detail_component_1 = project_detail_component_1_1;
            },
            function (cv_detail_component_1_1) {
                cv_detail_component_1 = cv_detail_component_1_1;
            },
            function (cv_component_1_1) {
                cv_component_1 = cv_component_1_1;
            },
            function (social_detail_component_1_1) {
                social_detail_component_1 = social_detail_component_1_1;
            },
            function (social_component_1_1) {
                social_component_1 = social_component_1_1;
            },
            function (skills_detail_component_1_1) {
                skills_detail_component_1 = skills_detail_component_1_1;
            },
            function (skills_component_1_1) {
                skills_component_1 = skills_component_1_1;
            }],
        execute: function() {
            exports_1("NAVIGATION", NAVIGATION = [
                {
                    path: '/home',
                    name: 'Home',
                    link: ['Home'],
                    component: home_component_1.HomeComponent,
                    useAsDefault: true
                },
                {
                    path: '/per',
                    name: 'Per',
                    link: ['Per'],
                    component: about_component_1.AboutComponent,
                    "useAsDefault": false
                },
                {
                    path: '/project-detail/:id',
                    name: 'ProjectDetail',
                    link: null,
                    component: project_detail_component_1.ProjectDetailComponent,
                    "useAsDefault": false
                },
                {
                    path: '/portfolio',
                    name: 'Portfolio',
                    link: ['Portfolio'],
                    component: portfolio_component_1.PortfolioComponent,
                    "useAsDefault": false
                },
                {
                    path: '/social-detail/:id',
                    name: 'SocialDetail',
                    link: null,
                    component: social_detail_component_1.SocialDetailComponent,
                    "useAsDefault": false
                },
                {
                    path: '/social',
                    name: 'Social',
                    link: ['Social'],
                    component: social_component_1.SocialComponent,
                    "useAsDefault": false
                },
                {
                    path: '/skills-detail/:id',
                    name: 'SkillsDetail',
                    link: null,
                    component: skills_detail_component_1.SkillsDetailComponent,
                    "useAsDefault": false
                },
                {
                    path: '/skills',
                    name: 'Skills',
                    link: ['Skills'],
                    component: skills_component_1.SkillsComponent,
                    "useAsDefault": false
                },
                {
                    path: '/cv-detail/:id',
                    name: 'CvDetail',
                    link: null,
                    component: cv_detail_component_1.CvDetailComponent,
                    "useAsDefault": false
                },
                {
                    path: '/cv',
                    name: 'Cv',
                    link: ['Cv'],
                    component: cv_component_1.CvComponent,
                    "useAsDefault": false
                },
                {
                    path: '/blog',
                    name: 'Blog',
                    link: ['Blog'],
                    component: blog_component_1.BlogComponent,
                    "useAsDefault": false
                }
            ]);
        }
    }
});
//# sourceMappingURL=navigation.data.js.map