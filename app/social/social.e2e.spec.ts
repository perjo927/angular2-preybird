declare var element: any;
declare var by: any;
declare var browser: any;

describe('Given that I am visiting Programmer Per', () => {
    let el = element(by.tagName('programmer-per-social'));

    describe('When I am taken to the /social route', () => {
        beforeEach(() => browser.get('/social'));

        it('Then I should see the social component',
            () => expect(el.getTagName()).toBe("programmer-per-social"));
    });
});