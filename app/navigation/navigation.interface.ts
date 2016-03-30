import { Navigation } from "./navigation";

export interface INavigationService {
    selectedRoute: Navigation;

    getNavigationItems(): Promise<Navigation[]>;
    getNavigationItem(name: string): Promise<Navigation>;
    getRoute(): Navigation;
    setNavigationItem(route: Navigation): void;
}