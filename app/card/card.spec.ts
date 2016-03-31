import { CardComponent } from 'card.component';

describe('Given that I have a CardComponent', () => {
    let cardComponent = new CardComponent();

    describe('Then it must have a card property', () => {
        expect(cardComponent.card).toBeNull();
    });
});