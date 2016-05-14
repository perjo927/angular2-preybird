System.register(['angular2/core', './navigation.data'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, navigation_data_1;
    var NavigationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navigation_data_1_1) {
                navigation_data_1 = navigation_data_1_1;
            }],
        execute: function() {
            NavigationService = (function () {
                function NavigationService() {
                }
                NavigationService.prototype.getNavigationItems = function () {
                    return Promise.resolve(navigation_data_1.NAVIGATION);
                };
                NavigationService.prototype.getNavigationItem = function (name) {
                    return this.getNavigationItems().then(function (navigation) { return navigation.filter(function (navigation) { return navigation.name === name; })[0]; });
                };
                NavigationService.prototype.getRoute = function () {
                    return this.selectedRoute;
                };
                NavigationService.prototype.setNavigationItem = function (route) {
                    this.selectedRoute = route;
                };
                NavigationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], NavigationService);
                return NavigationService;
            }());
            exports_1("NavigationService", NavigationService);
        }
    }
});
//# sourceMappingURL=navigation.service.js.map