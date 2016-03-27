import {Injectable} from 'angular2/core';
import {NAVIGATION} from './mock-navigation';
import { Navigation } from "./navigation";

@Injectable()
export class NavigationService {

    // TODO

    //getNavigationItems(): Promise<Navigation[]> {
    //    return Promise.resolve(NAVIGATION);
    //}
    //
    //getNavigationItem(id: number): Promise<Navigation> {
    //    return Promise.resolve(NAVIGATION).then(
    //        navigation => navigation.filter(navigation => navigation.id === id)[0]
    //    );
    //}
}