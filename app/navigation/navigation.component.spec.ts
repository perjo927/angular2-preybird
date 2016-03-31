import { Navigation } from "app/navigation/navigation";
import { NavigationComponent } from 'app/navigation/navigation.component';
import { NavigationService } from "app/navigation/navigation.service";
import { INavigationService } from "app/navigation/navigation.service.interface";
import * as mocks from 'app/navigation/navigation.mocks'

describe('Given that I have an NavigationComponent', () => {
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