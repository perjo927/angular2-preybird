import { Navigation } from './navigation';
import { NavigationService } from "./navigation.service";
import { INavigationService } from "./navigation.service.interface";


export let mockRoutes: Navigation[] = [{
    path: '/test',
    name: 'Test',
    link: ['Test'],
    component: {},
    useAsDefault: true
}];

export class mockService extends NavigationService {
    getNavigationItems(): Promise<Navigation[]> {
        return Promise.resolve(mockRoutes);
    }
}