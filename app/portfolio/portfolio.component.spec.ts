import { Router } from 'angular2/router';
import { Injectable } from 'angular2/core';
import { Project } from "app/portfolio/project";
import { PORTFOLIO } from 'app/portfolio/mock-portfolio';
import { PortfolioComponent } from "app/portfolio/portfolio.component";
import { PortfolioService } from "app/portfolio/portfolio.service";
import * as mocks from 'app/portfolio/portfolio.mocks';

describe('Given that I have a portfolioComponent', () => {
    let component: PortfolioComponent;
    let service: PortfolioService;

    describe('When I provide it to my component', () => {
        beforeEach(() => {
            service = new mocks.mockService();
            component = new PortfolioComponent(mocks.mockRouter, service);

            spyOn(component, 'getPortfolio');
            component.ngOnInit();
        });

        // TODO: Support async
        it('Then it must contain set the Project array', () => expect(component.getPortfolio).toHaveBeenCalled());
    });

    describe('When I call onSelect with the selected Project', () => {
        let selectedProject: Project,
            selectedItem: Project;

        beforeEach(() => {
            selectedProject = mocks.mockCollection[0];
            component.onSelect(selectedProject);
            selectedItem = component.selectedItem;
        });

        describe('And I use the selectedItem property', () => {
            it('Then it must return the correct id of the item', () => expect(selectedItem.id).toBe(1337));
        })
    });
});