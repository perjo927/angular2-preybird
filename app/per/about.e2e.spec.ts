describe('Given that I am visiting Programmer Per', () => {
    let el = element(by.tagName('programmer-per-about'));

    describe('When I am taken to the /about route', () => {
        beforeEach(() => browser.get('/per'));

        it('Then I should see the about component',
            () => expect(el.getTagName()).toBe("programmer-per-about"));
    });
});