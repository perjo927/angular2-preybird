import { AppComponent } from './app.component';

describe('Given that I have an AppComponent', () => {
    let component = new AppComponent();

    describe('And I use it in my class', () => {
        it('Then it must be defined', () => expect(component).toBeDefined());
    });
});