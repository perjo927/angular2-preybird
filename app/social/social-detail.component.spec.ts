import { SocialDetailComponent } from 'app/social/social-detail.component';

describe('Given that I have a SocialComponent', () => {
    let component = new SocialDetailComponent();

    describe('And I use it in my class', () => {
        it('Then it must be defined', () => expect(component).toBeDefined());
    });
});