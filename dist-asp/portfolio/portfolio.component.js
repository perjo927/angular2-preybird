System.register(['angular2/core', 'angular2/router', './project-detail.component', './portfolio.service'], function(exports_1, context_1) {
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
    var core_1, router_1, project_detail_component_1, portfolio_service_1;
    var PortfolioComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (project_detail_component_1_1) {
                project_detail_component_1 = project_detail_component_1_1;
            },
            function (portfolio_service_1_1) {
                portfolio_service_1 = portfolio_service_1_1;
            }],
        execute: function() {
            PortfolioComponent = (function () {
                function PortfolioComponent(_router, _portfolioService) {
                    this._router = _router;
                    this._portfolioService = _portfolioService;
                }
                PortfolioComponent.prototype.ngOnInit = function () {
                    this.getPortfolio();
                };
                PortfolioComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                PortfolioComponent.prototype.getPortfolio = function () {
                    var _this = this;
                    this._portfolioService.getPortfolio().then(function (portfolio) { return _this.collection = portfolio; });
                };
                PortfolioComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['ProjectDetail', { id: this.selectedItem.id }]);
                };
                PortfolioComponent = __decorate([
                    core_1.Component({
                        selector: 'portfolio',
                        templateUrl: 'app/portfolio/portfolio.component.html',
                        styleUrls: ['app/portfolio/portfolio.component.css'],
                        directives: [project_detail_component_1.ProjectDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, portfolio_service_1.PortfolioService])
                ], PortfolioComponent);
                return PortfolioComponent;
            }());
            exports_1("PortfolioComponent", PortfolioComponent);
        }
    }
});
//# sourceMappingURL=portfolio.component.js.map