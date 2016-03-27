import { Card } from "./card";

export interface CardService {
    getCardItems(): Promise<Card[]>;
    getCardItem(id: number): Promise<Card>;
}