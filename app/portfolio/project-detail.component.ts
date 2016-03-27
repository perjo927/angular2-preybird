import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Project } from './project';
import { PortfolioService } from './portfolio.service';
import { CardComponent } from "../card/card.component";
import { Card } from "../card/card";


@Component({
    selector: 'project-detail',
    templateUrl: 'app/portfolio/project-detail.component.html',
    styleUrls: ['app/portfolio/project-detail.component.css'],
    directives: [CardComponent]
})

export class ProjectDetailComponent extends CardComponent implements OnInit {

    constructor(
        private _routeParams: RouteParams,
        private _portfolioService: PortfolioService
    ) {
        super();
    }


    ngOnInit() {
        let id = Number(this._routeParams.get('id'));
        this._portfolioService.getProject(id)
            .then(project => this.card = project);
    }
}