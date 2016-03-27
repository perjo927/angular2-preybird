import {Injectable} from 'angular2/core';
import {PORTFOLIO} from './mock-portfolio';

@Injectable()
export class PortfolioService {
    getPortfolio() {
        return Promise.resolve(PORTFOLIO);
    }

    getProject(id: number) {
        return Promise.resolve(PORTFOLIO).then(
            portfolio => portfolio.filter(project => project.id === id)[0]
        );
    }
}