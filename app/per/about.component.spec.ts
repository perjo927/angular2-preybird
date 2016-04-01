import { AboutComponent } from 'app/per/about.component';

describe('Given that I have an AboutComponent', () => {
    let component = new AboutComponent();

    describe('And I use it in my class', () => {
        it('Then it must be defined', () => expect(component).toBeDefined());
    });
});