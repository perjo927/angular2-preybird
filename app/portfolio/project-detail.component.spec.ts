import { ProjectDetailComponent } from 'app/portfolio/project-detail.component';
import * as mocks from 'app/portfolio/portfolio.mocks'

describe('Given that I have an ProjectDetailComponent', () => {
    let component = new ProjectDetailComponent(mocks.mockRouteParams, mocks.mockService);

    describe('And I use it in my class', () => {
        it('Then it must be defined', () => expect(component).toBeDefined());
    });
});