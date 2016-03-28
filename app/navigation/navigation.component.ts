import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Navigation } from './navigation';
import { NavigationService } from './navigation.service';

@Component({
    selector: 'navigation',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/navigation/navigation.component.html',
    styleUrls: ['app/navigation/navigation.component.css']
})

export class NavigationComponent implements OnInit {
    navigation: Navigation[];

    constructor(
        private _navigationService: NavigationService) {
    }

    private getNavigationItems() {
        this._navigationService.getNavigationItems().then(navigation => this.navigation = navigation);
    }

    ngOnInit() {
        this.getNavigationItems();
    }
}