import { CvDetailComponent } from 'app/cv/cv-detail.component';

describe('Given that I have a CvDetailComponent', () => {
    let cvComponent = new CvDetailComponent();

    describe('And I use it in my class', () => {
        it('Then it must be defined', () => expect(cvComponent).toBeDefined());
    });
});