import {Injectable} from 'angular2/core';
import {PORTFOLIO} from './mock-portfolio';
import { CardService } from "../card/card.service";
import { Project } from "./project";

@Injectable()
export class PortfolioService implements CardService{

    getCardItems(): Promise<Project[]> {
        return Promise.resolve(PORTFOLIO);
    }

    getCardItem(id: number): Promise<Project> {
        return Promise.resolve(PORTFOLIO).then(
            portfolio => portfolio.filter(project => project.id === id)[0]
        );
    }

    getPortfolio() {
        return this.getCardItems();
    }

    getProject(id: number) {
        return this.getCardItem(id);
    }
}