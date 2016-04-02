import { Navigation } from "./navigation";
import { NavigationComponent } from './navigation.component';
import { NavigationService } from "./navigation.service";
import { INavigationService } from "./navigation.service.interface";
import * as mocks from './navigation.mocks'

describe('Given that I have a NavigationComponent', () => {
    let component: NavigationComponent;

    describe('When I provide it to my component', () => {
        beforeEach(() => {
            let service = new mocks.mockService();
            component = new NavigationComponent(service);
            component.ngOnInit();
        });

        // TODO: Support async
        it('Then it must contain a Navigation array', () => expect(component.navigation).toBeDefined());
    });

    describe('When I call onSelect with the /test route', () => {
        let selectedRoute: Navigation,
            selectedPath: string;

        beforeEach(() => {
            component.onSelect(mocks.mockRoutes[0]);
            selectedRoute = component.getRoute();
            selectedPath = selectedRoute.path
        });

        describe('And I call getRoute to get the selected Navigation item', () => {
            it('Then it must return the /test route', () => expect(selectedPath).toBe('/test'));
        })
    });
});