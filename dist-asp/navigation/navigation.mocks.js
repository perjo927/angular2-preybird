System.register(["./navigation.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var navigation_service_1;
    var mockRoutes, mockService;
    return {
        setters:[
            function (navigation_service_1_1) {
                navigation_service_1 = navigation_service_1_1;
            }],
        execute: function() {
            exports_1("mockRoutes", mockRoutes = [{
                    path: '/test',
                    name: 'Test',
                    link: ['Test'],
                    component: {},
                    useAsDefault: true
                }]);
            mockService = (function (_super) {
                __extends(mockService, _super);
                function mockService() {
                    _super.apply(this, arguments);
                }
                mockService.prototype.getNavigationItems = function () {
                    return Promise.resolve(mockRoutes);
                };
                return mockService;
            }(navigation_service_1.NavigationService));
            exports_1("mockService", mockService);
        }
    }
});
//# sourceMappingURL=navigation.mocks.js.map