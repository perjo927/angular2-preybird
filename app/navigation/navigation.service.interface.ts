import { Navigation } from "./navigation";

export interface INavigationService {
    selectedRoute: Navigation;

    getNavigationItems(): Promise<Navigation[]>;
    getNavigationItem(name: string): Promise<Navigation>;
    getRoute(): Navigation;
    setNavigationItem(route: Navigation): void;
}

// https://angular.io/docs/ts/latest/guide/dependency-injection.html
import {OpaqueToken} from 'angular2/core';
export const INavigationService = new OpaqueToken('NavigationService');