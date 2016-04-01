describe('Given that I am visiting Programmer Per', () => {
    let el = element(by.tagName('programmer-per-cv'));

    describe('When I am taken to the /cv route', () => {
        beforeEach(() => browser.get('/cv'));

        it('Then I should see the cv component',
            () => expect(el.getTagName()).toBe("programmer-per-cv"));
    });
});