describe('Given that I am visiting Programmer Per', () => {
    describe('When I am taken to the /home route', () => {
        it('Then 42 should be 42', function() {
            browser.get('http://localhost:3000/');

            expect(42).toBe(42);
            //element(by.model('todoList.todoText')).sendKeys('write first protractor test');
            //element(by.css('[value="add"]')).click();
            //
            //var todoList = element.all(by.repeater('todo in todoList.todos'));
            //expect(todoList.count()).toEqual(3);
            //expect(todoList.get(2).getText()).toEqual('write first protractor test');
            //
            //// You wrote your first test, cross it off the list
            //todoList.get(2).element(by.css('input')).click();
            //var completedAmount = element.all(by.css('.done-true'));
            //expect(completedAmount.count()).toEqual(2);
        });
    });

});