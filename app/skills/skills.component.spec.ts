import { SkillsComponent } from './skills.component';

describe('Given that I have a SkillsComponent', () => {
    let component = new SkillsComponent();

    describe('And I use it in my class', () => {
        it('Then it must be defined', () => expect(component).toBeDefined());
    });
});