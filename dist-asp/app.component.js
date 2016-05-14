System.register(['angular2/core', 'angular2/router', './navigation/navigation.data', "./navigation/navigation.component", "./navigation/navigation.service.interface", "./navigation/navigation.service", './portfolio/portfolio.service'], function(exports_1, context_1) {
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
    var core_1, router_1, navigation_data_1, navigation_component_1, navigation_service_interface_1, navigation_service_1, portfolio_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navigation_data_1_1) {
                navigation_data_1 = navigation_data_1_1;
            },
            function (navigation_component_1_1) {
                navigation_component_1 = navigation_component_1_1;
            },
            function (navigation_service_interface_1_1) {
                navigation_service_interface_1 = navigation_service_interface_1_1;
            },
            function (navigation_service_1_1) {
                navigation_service_1 = navigation_service_1_1;
            },
            function (portfolio_service_1_1) {
                portfolio_service_1 = portfolio_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'programmer-per-app',
                        templateUrl: 'app/app.component.html',
                        directives: [navigation_component_1.NavigationComponent],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            portfolio_service_1.PortfolioService,
                            new core_1.Provider(navigation_service_interface_1.INavigationService, { useClass: navigation_service_1.NavigationService })
                        ],
                        styleUrls: ['app/app.component.css'],
                    }),
                    router_1.RouteConfig(navigation_data_1.NAVIGATION), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map