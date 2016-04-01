describe('Given that I am visiting Programmer Per', () => {
    let el = element(by.tagName('navigation'));
    let home = element(by.tagName("a"));

    describe('When I am taken to any route', () => {
        beforeEach(() => browser.get('/blog'));

        it('Then I should see the navigation component',
            () => expect(el.getTagName()).toBe("navigation"));
    });

    describe('When I am taken to any route', () => {
        beforeEach(() => {
            browser.get('/per');
        });

        it('Then I should be able to click a navigation item', () => {
            home.click();
            expect(browser.getCurrentUrl()).toBe("http://localhost:3000/home")
        });
    });
});