declare var element: any;
declare var by: any;
declare var browser: any;

describe('Given that I am visiting Programmer Per', () => {
    let el = element(by.tagName('programmer-per-blog'));

    describe('When I am taken to the /blog route', () => {
        beforeEach(() => browser.get('/blog'));

        it('Then I should see the blog component',
            () => expect(el.getTagName()).toBe("programmer-per-blog"));
    });
});