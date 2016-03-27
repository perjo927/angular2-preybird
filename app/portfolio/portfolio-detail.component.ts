import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Project } from './project';
import { PortfolioService } from './portfolio.service';


@Component({
    selector: 'portfolio-detail',
    templateUrl: 'app/portfolio/portfolio-detail.component.html',
    styleUrls: ['app/portfolio/portfolio-detail.component.css']
})

export class PortfolioDetailComponent implements OnInit{
    @Input()
    project: Project;

    ngOnInit() {
        let id = Number(this._routeParams.get('id'));
        this._portfolioService.getProject(id)
            .then(project => this.project = project);
    }

    constructor(
        private _portfolioService: PortfolioService,
        private _routeParams: RouteParams) {
    }

    goBack() {
        window.history.back();
    }
}