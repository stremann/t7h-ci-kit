(function () {
    'use strict';

    afterEach(function () {
        //helper.checkConsoleLog();
    });




    describe('Navigation', function () {

            it('should start on the "LoanTradeSettlement" main page', function () {
                browser.ignoreSynchronization = true;
                browser.get('/');
                expect(browser.getTitle()).toEqual('Travel and help');
            });
    });



})();