import { SocialComponent } from './social.component';

describe('Given that I have a SocialComponent', () => {
    let component = new SocialComponent();

    describe('And I use it in my class', () => {
        it('Then it must be defined', () => expect(component).toBeDefined());
    });
});