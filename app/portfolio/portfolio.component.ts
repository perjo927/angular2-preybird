import { Component } from 'angular2/core'
import { Router } from 'angular2/router';
import { Project } from './project';
import { ProjectDetailComponent } from './project-detail.component';
import { PortfolioService } from './portfolio.service';
import { OnInit } from 'angular2/core';

@Component({
    selector: 'portfolio',
    templateUrl: 'app/portfolio/portfolio.component.html',
    styleUrls:  ['app/portfolio/portfolio.component.css'],
    directives: [ProjectDetailComponent]
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

    // TODO: Implement in (card) interface
    gotoDetail() {
        this._router.navigate(['ProjectDetail', { id: this.selectedProject.id }]);
    }
}