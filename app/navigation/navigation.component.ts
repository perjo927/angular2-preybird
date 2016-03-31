import { Component, OnInit, Inject} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Navigation } from './navigation';
import { NavigationService } from './navigation.service';
import {INavigationService} from "./navigation.service.interface";
import { IconComponent } from '../icon/icon.component';
import { OnSelect } from "../shared/lib";


@Component({
    selector: 'navigation',
    directives: [ROUTER_DIRECTIVES, IconComponent],
    templateUrl: 'app/navigation/navigation.component.html',
    styleUrls: ['app/navigation/navigation.component.css']
})

export class NavigationComponent implements OnInit, OnSelect {
    navigation: Navigation[];

    /* TODO: Get route on every route change */
    constructor(
        @Inject(INavigationService) private _navigationService: INavigationService) {
    }

    private getNavigationItems() {
        this._navigationService.getNavigationItems().then(navigation => this.navigation = navigation.filter(
            navigation => navigation.link !== null)
        );
    }

    getRoute(): Navigation {
        return this._navigationService.getRoute();
    }

    ngOnInit() {
        this.getNavigationItems();
    }

    onSelect(item: Navigation) {
        this._navigationService.setNavigationItem(item);
    }
}