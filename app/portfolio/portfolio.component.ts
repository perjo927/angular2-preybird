import { Component } from 'angular2/core'
import { Router } from 'angular2/router';
import { Project } from './project';
import { ProjectDetailComponent } from './project-detail.component';
import { PortfolioService } from './portfolio.service';
import { OnInit } from 'angular2/core';
import { CardViewer } from '../card/card-viewer';
import { OnSelect } from "../shared/lib";

@Component({
    selector: 'portfolio',
    templateUrl: 'app/portfolio/portfolio.component.html',
    styleUrls:  ['app/portfolio/portfolio.component.css'],
    directives: [ProjectDetailComponent]
})

export class PortfolioComponent implements OnInit, CardViewer, OnSelect {
    collection: Project[];
    selectedItem: Project;

    constructor(
        private _router: Router,
        private _portfolioService: PortfolioService) {
    }

    ngOnInit() {
        this.getPortfolio();
    }

    onSelect(item: Project) {
        this.selectedItem = item;
    }

    getPortfolio() {
        this._portfolioService.getPortfolio().then(portfolio => this.collection = portfolio);
    }

    gotoDetail() {
        this._router.navigate(['ProjectDetail', { id: this.selectedItem.id }]);
    }
}


