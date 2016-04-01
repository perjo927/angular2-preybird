import { HomeComponent } from 'app/home/home.component';

describe('Given that I have a HomeComponent', () => {
    let component = new HomeComponent();

    describe('And I use it in my class', () => {
        it('Then it must be defined', () => expect(component).toBeDefined());
    });
});