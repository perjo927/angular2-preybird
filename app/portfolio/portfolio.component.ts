import { Component } from 'angular2/core'
import { Router } from 'angular2/router';
import { Project } from './project';
import { PortfolioDetailComponent } from './portfolio-detail.component';
import { PortfolioService } from './portfolio.service';
import {OnInit } from 'angular2/core';

// TODO: Refactor to generic / reusable / implement

@Component({
    selector: 'portfolio',
    templateUrl: 'app/portfolio/portfolio.component.html',
    styleUrls:  ['app/portfolio/portfolio.component.css'],
    directives: [PortfolioDetailComponent]
})

export class PortfolioComponent implements OnInit {
    portfolio : Project[];
    selectedProject: Project;

    constructor(
        private _router: Router,
        private _portfolioService: PortfolioService) {
    }

    ngOnInit() {
        this.getPortfolio();
    }

    onSelect(project: Project) {
        this.selectedProject = project;
    }

    getPortfolio() {
        this._portfolioService.getPortfolio().then(portfolio => this.portfolio = portfolio);
    }

    gotoDetail() {
        this._router.navigate(['PortfolioDetail', { id: this.selectedProject.id }]);
    }
}