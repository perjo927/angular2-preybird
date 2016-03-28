import { Card } from './card';

export interface CardViewer {
    collection: Card[];
    selectedItem: Card;

    onSelect(item: Card) : void;
    gotoDetail(): void;
}