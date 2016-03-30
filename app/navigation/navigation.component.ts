import { Component, OnInit, AfterViewInit, ElementRef, Inject } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Navigation } from './navigation';
import { NavigationService } from './navigation.service';
import { IconComponent } from '../icon/icon.component';


@Component({
    selector: 'navigation',
    directives: [ROUTER_DIRECTIVES, IconComponent],
    templateUrl: 'app/navigation/navigation.component.html',
    styleUrls: ['app/navigation/navigation.component.css']
})

export class NavigationComponent implements OnInit, AfterViewInit {
    private elementRef: ElementRef;

    navigation: Navigation[];

    constructor(
        @Inject(ElementRef) elementRef: ElementRef,
        private _navigationService: NavigationService) {
        this.elementRef = elementRef;
    }

    private getNavigationItems() {
        this._navigationService.getNavigationItems().then(navigation => this.navigation = navigation.filter(
            navigation => navigation.link !== null)
        );
    }

    ngOnInit() {
        this.getNavigationItems();
    }

    ngAfterViewInit() {
        // TODO
    }
}