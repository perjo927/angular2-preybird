System.register(["angular2/ts/src/router/router", "angular2/src/router/instruction", "./portfolio.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var router_1, instruction_1, portfolio_service_1;
    var mockCollection, mockService, MockRouter, mockRouter, mockRouteParams;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (instruction_1_1) {
                instruction_1 = instruction_1_1;
            },
            function (portfolio_service_1_1) {
                portfolio_service_1 = portfolio_service_1_1;
            }],
        execute: function() {
            exports_1("mockCollection", mockCollection = [{
                    "id": 1337,
                    "title": "Test Thing 1",
                    "image": "",
                    "link": "",
                    "text": ""
                }]);
            mockService = (function (_super) {
                __extends(mockService, _super);
                function mockService() {
                    _super.apply(this, arguments);
                }
                mockService.prototype.getCardItems = function () {
                    return Promise.resolve(mockCollection);
                };
                return mockService;
            }(portfolio_service_1.PortfolioService));
            exports_1("mockService", mockService);
            MockRouter = (function (_super) {
                __extends(MockRouter, _super);
                function MockRouter() {
                    _super.call(this, null, null, null, null);
                }
                return MockRouter;
            }(router_1.Router));
            exports_1("mockRouter", mockRouter = new MockRouter());
            exports_1("mockRouteParams", mockRouteParams = new instruction_1.RouteParams({
                "foo": "bar"
            }));
        }
    }
});
//# sourceMappingURL=portfolio.mocks.js.map