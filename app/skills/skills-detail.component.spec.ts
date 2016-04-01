import { SkillsDetailComponent } from 'app/skills/skills-detail.component';

describe('Given that I have a SkillsComponent', () => {
    let component = new SkillsDetailComponent();

    describe('And I use it in my class', () => {
        it('Then it must be defined', () => expect(component).toBeDefined());
    });
});