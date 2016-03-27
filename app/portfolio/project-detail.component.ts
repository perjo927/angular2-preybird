import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Project } from './project';
import { PortfolioService } from './portfolio.service';


@Component({
    selector: 'project-detail',
    templateUrl: 'app/portfolio/project-detail.component.html',
    styleUrls: ['app/portfolio/project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit{
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