declare var element: any;
declare var by: any;
declare var browser: any;

describe('Given that I am visiting Programmer Per', () => {
    let el = element(by.tagName('programmer-per-skills'));

    describe('When I am taken to the /skills route', () => {
        beforeEach(() => browser.get('/skills'));

        it('Then I should see the skills component',
            () => expect(el.getTagName()).toBe("programmer-per-skills"));
    });
});