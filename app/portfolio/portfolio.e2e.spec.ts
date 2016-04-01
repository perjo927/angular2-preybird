describe('Given that I am visiting Programmer Per', () => {
    let el = element(by.tagName('portfolio'));
    let all = element.all(by.className('project'));
    let one = element(by.className('project'));
    let selectedItem = element(by.className('selected-item'));
    let viewButton = element(by.buttonText('View Details'));
    let backButton = element(by.buttonText("Back"));

    beforeEach(() => browser.get('/portfolio'));

    describe('When I am taken to the /portfolio route', () => {
        it('Then I should see the portfolio component',
            () => expect(el.getTagName()).toBe("portfolio"));

        it('Then I should see 5 project components',
            () => expect(all.count()).toBe(5));
    });

    describe('And when I click on a project', () => {
        it('Then I should see a link to the project details', () => {
            one.click();
            expect(selectedItem.getText()).toContain("THING")
        });
    });

    describe('And when I click on project details', () => {
        it('Then I should see the project details', () => {
            one.click();
            viewButton.click();
            expect(browser.getCurrentUrl()).toContain("http://localhost:3000/project-detail/");
        });
    });

    describe('And when I click on project details', () => {
        it('Then I should see the project details and be able to go back', () => {
            one.click();
            viewButton.click();
            backButton.click();
            expect(browser.getCurrentUrl()).toContain("http://localhost:3000/portfolio");
        });
    });
});