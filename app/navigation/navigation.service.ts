import { Injectable } from 'angular2/core';
import { NAVIGATION } from './navigation.data';
import { Navigation } from "./navigation";
import { INavigationService } from "./navigation.service.interface";

@Injectable()
export class NavigationService implements INavigationService {
    selectedRoute: Navigation;

    getNavigationItems(): Promise<Navigation[]> {
        return Promise.resolve(NAVIGATION);
    }

    getNavigationItem(name: string): Promise<Navigation> {
        return this.getNavigationItems().then(
            navigation => navigation.filter(navigation => navigation.name === name)[0]
        );
    }

    getRoute(): Navigation {
        return this.selectedRoute;
    }

    setNavigationItem(route: Navigation): void {
        this.selectedRoute = route;
    }
}