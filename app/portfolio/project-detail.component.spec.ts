import { ProjectDetailComponent } from './project-detail.component';
import * as mocks from './portfolio.mocks'

describe('Given that I have a ProjectDetailComponent', () => {
    let service = new mocks.mockService();
    let params = mocks.mockRouteParams;
    let component = new ProjectDetailComponent(params, service);

    describe('And I use it in my class', () => {
        it('Then it must be defined', () => expect(component).toBeDefined());
    });
});