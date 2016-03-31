import { CardComponent } from 'app/card/card.component';
import {Card} from "app/card/card";

describe('Given that I have a CardComponent', () => {
    let cardComponent = new CardComponent();

    describe('And I use it in my class', () => {
        it('Then it must be defined', () => expect(cardComponent).toBeDefined());
    });
});