System.register(['angular2/core', 'angular2/router', "./navigation.service.interface", '../icon/icon.component'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, navigation_service_interface_1, icon_component_1;
    var NavigationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navigation_service_interface_1_1) {
                navigation_service_interface_1 = navigation_service_interface_1_1;
            },
            function (icon_component_1_1) {
                icon_component_1 = icon_component_1_1;
            }],
        execute: function() {
            NavigationComponent = (function () {
                /* TODO: Get route on every route change */
                function NavigationComponent(_navigationService) {
                    this._navigationService = _navigationService;
                    this.navigation = null; // TODO: No default value
                }
                NavigationComponent.prototype.getNavigationItems = function () {
                    var _this = this;
                    this._navigationService.getNavigationItems().then(function (navigation) { return _this.navigation = navigation.filter(function (navigation) { return navigation.link !== null; }); });
                };
                NavigationComponent.prototype.getRoute = function () {
                    return this._navigationService.getRoute();
                };
                NavigationComponent.prototype.ngOnInit = function () {
                    this.getNavigationItems();
                };
                NavigationComponent.prototype.onSelect = function (item) {
                    this._navigationService.setNavigationItem(item);
                };
                NavigationComponent = __decorate([
                    core_1.Component({
                        selector: 'navigation',
                        directives: [router_1.ROUTER_DIRECTIVES, icon_component_1.IconComponent],
                        templateUrl: 'app/navigation/navigation.component.html',
                        styleUrls: ['app/navigation/navigation.component.css']
                    }),
                    __param(0, core_1.Inject(navigation_service_interface_1.INavigationService)), 
                    __metadata('design:paramtypes', [Object])
                ], NavigationComponent);
                return NavigationComponent;
            }());
            exports_1("NavigationComponent", NavigationComponent);
        }
    }
});
//# sourceMappingURL=navigation.component.js.map