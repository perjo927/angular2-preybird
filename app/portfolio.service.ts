import {Injectable} from 'angular2/core';
import {PORTFOLIOS} from './mock-portfolios';

@Injectable()
export class PortfolioService {
    getPortfolios() {
        return Promise.resolve(PORTFOLIOS);
    }

    getPortfolio(id: number) {
        return Promise.resolve(PORTFOLIOS).then(
            portfolios => portfolios.filter(portfolio => portfolio.id === id)[0]
        );
    }
}