describe('Given that I am visiting Programmer Per', () => {
    let home = element(by.tagName('programmer-per-home'));

    describe('When I am taken to the /home route', () => {
        beforeEach(() => browser.get('/'));

        it('Then I should see the home component',
            () => expect(home.getTagName()).toBe("programmer-per-home"));
    });
});