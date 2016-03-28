import {Navigation} from "./navigation";

export interface INavigationService {
    getNavigationItems(): Promise<Navigation[]>;
    getNavigationItem(name: string): Promise<Navigation>;
}