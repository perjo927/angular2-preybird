import {Injectable} from 'angular2/core';
import {NAVIGATION} from './navigation.data';
import { Navigation } from "./navigation";
import { INavigationService } from "./navigation.interface";

@Injectable()
export class NavigationService implements INavigationService {

    getNavigationItems(): Promise<Navigation[]> {
        return Promise.resolve(NAVIGATION);
    }

    getNavigationItem(name: string): Promise<Navigation> {
        return Promise.resolve(NAVIGATION).then(
            navigation => navigation.filter(navigation => navigation.name === name)[0]
        );
    }
}