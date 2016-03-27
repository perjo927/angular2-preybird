import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Portfolio } from './portfolio';
import { PortfolioService } from './portfolio.service';
import {Portfolio} from "./portfolio";

@Component({
    selector: 'cv-home',
    templateUrl: 'app/home.component.html',
    styleUrls: ['app/home.component.css']
})

export class HomeComponent implements OnInit {
    portfolios: Portfolio[] = [];

    constructor(
        private _router: Router,
        private _portfolioService: PortfolioService) { }

    ngOnInit() {
        this._portfolioService.getPortfolios()
            .then(portfolios => this.portfolios = portfolios.slice(1,5));
    }

    gotoDetail(portfolio: Portfolio) {
        let link = ['PortfolioDetail', { id: portfolio.id }];
        this._router.navigate(link);
    }
}