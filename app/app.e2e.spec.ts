declare var element: any;
declare var by: any;
declare var browser: any;

describe('Given that I am visiting Programmer Per', () => {
    let home = element(by.tagName('programmer-per-home'));

    describe('When I am taken to the /home route', () => {
        beforeEach(() => browser.get('/'));

        it('Then it should have a title',
            () => expect(browser.getTitle()).toBe("Per === 'Programmer';"));

        it('Then I should see the home component',
            () => expect(home.getTagName()).toBe("programmer-per-home"));
    });
});