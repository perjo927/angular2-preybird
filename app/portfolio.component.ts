import {Component} from 'angular2/core'
import { Router } from 'angular2/router';
import {Portfolio} from './portfolio';
import {PortfolioDetailComponent} from './portfolio-detail.component';
import {PortfolioService} from './portfolio.service';
import {OnInit} from 'angular2/core';
import {Portfolio} from "./portfolio";

// TODO: Refactor to generic / reusable / implement

@Component({
    selector: 'portfolio',
    templateUrl: 'app/portfolio.component.html',
    styleUrls:  ['app/portfolio.component.css'],
    directives: [PortfolioDetailComponent]
})

export class PortfolioComponent implements OnInit {
    portfolios : Portfolio[];
    selectedPortfolio: Portfolio;

    constructor(
        private _router: Router,
        private _portfolioService: PortfolioService) {
    }

    ngOnInit() {
        this.getPortfolios();
    }

    onSelect(portfolio: Portfolio) {
        this.selectedPortfolio = portfolio;
    }

    getPortfolios() {
        this._portfolioService.getPortfolios().then(portfolios => this.portfolios = portfolios);
    }

    gotoDetail() {
        this._router.navigate(['PortfolioDetail', { id: this.selectedPortfolio.id }]);
    }
}