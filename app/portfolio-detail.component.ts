import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import {Portfolio} from './portfolio';
import { PortfolioService } from './portfolio.service';


@Component({
    selector: 'portfolio-detail',
    templateUrl: 'app/portfolio-detail.component.html',
    styleUrls: ['app/portfolio-detail.component.css']
})

export class PortfolioDetailComponent implements OnInit{
    @Input()
    portfolio: Portfolio;

    ngOnInit() {
        let id = Number(this._routeParams.get('id'));
        this._portfolioService.getPortfolio(id)
            .then(portfolio => this.portfolio = portfolio);
    }

    constructor(
        private _portfolioService: PortfolioService,
        private _routeParams: RouteParams) {
    }

    goBack() {
        window.history.back();
    }
}