import { CvComponent } from './cv.component';

describe('Given that I have a CvComponent', () => {
    let cvComponent = new CvComponent();

    describe('And I use it in my class', () => {
        it('Then it must be defined', () => expect(cvComponent).toBeDefined());
    });
});