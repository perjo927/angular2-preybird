import { Project } from "project";
import { PortfolioComponent } from 'portfolio.component';
import { PortfolioService } from "portfolio.service";
import * as mocks from 'portfolio.mocks'

describe('Given that I have a PortfolioService', () => {
    let service: PortfolioService;
    let promise: Promise<any>;
    let result: any;

    describe('When I call getCardItems', () => {
        beforeEach(() => {
            service = new PortfolioService();
            promise = service.getPortfolio();
            promise.then((collection) => {
                    result = collection;
                }
            );
        });

        it('Then it must return a promise', () => expect(promise).toEqual(jasmine.any(Promise)));
        // TODO: Mock backend
        it('Then the promise must return a Collection object', () => expect(result[0].id).toBe(10));
    });

    describe('When I call getProject with id: 10', () => {
        // TODO: Mock backend
        beforeEach(() => {
            promise = service.getProject(10);
            promise.then(data => result = data);
        });

        it('Then it must return a promise', () => expect(promise).toEqual(jasmine.any(Promise)));
        it('Then it must get the Project object', () => expect(result.id).toBe(10));
    });


});