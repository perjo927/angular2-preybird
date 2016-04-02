import { IconComponent } from './icon.component';

describe('Given that I have an IconComponent', () => {
    let component = new IconComponent();

    describe('And I use it in my class', () => {
        it('Then it must be defined', () => expect(component).toBeDefined());
    });
});