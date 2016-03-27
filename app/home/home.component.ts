import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { PortfolioService } from '../portfolio/portfolio.service';
import { Project } from "../portfolio/project";

@Component({
    selector: 'cv-home',
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css']
})

export class HomeComponent implements OnInit {
    portfolio: Project[] = [];

    constructor(
        private _router: Router,
        private _portfolioService: PortfolioService) { }

    ngOnInit() {
        this._portfolioService.getPortfolio()
            .then(portfolio => this.portfolio = portfolio.slice(1,5));
    }

    gotoDetail(project: Project) {
        let link = ['ProjectDetail', { id: project.id }];
        this._router.navigate(link);
    }
}