describe('Given that I am visiting Programmer Per', () => {
    describe('When I am taken to the /home route', () => {
        it('Then it should have a title', function() {
            browser.get('http://localhost:3000/');

            expect(browser.getTitle()).toBe("Per === 'Programmer';");
        });
    });
});