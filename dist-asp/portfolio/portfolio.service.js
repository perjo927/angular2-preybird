System.register(['angular2/core', './mock-portfolio'], function(exports_1, context_1) {
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
    var core_1, mock_portfolio_1;
    var PortfolioService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_portfolio_1_1) {
                mock_portfolio_1 = mock_portfolio_1_1;
            }],
        execute: function() {
            PortfolioService = (function () {
                function PortfolioService() {
                }
                PortfolioService.prototype.getCardItems = function () {
                    return Promise.resolve(mock_portfolio_1.PORTFOLIO);
                };
                PortfolioService.prototype.getCardItem = function (id) {
                    return Promise.resolve(mock_portfolio_1.PORTFOLIO).then(function (portfolio) { return portfolio.filter(function (project) { return project.id === id; })[0]; });
                };
                PortfolioService.prototype.getPortfolio = function () {
                    return this.getCardItems();
                };
                PortfolioService.prototype.getProject = function (id) {
                    return this.getCardItem(id);
                };
                PortfolioService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PortfolioService);
                return PortfolioService;
            }());
            exports_1("PortfolioService", PortfolioService);
        }
    }
});
//# sourceMappingURL=portfolio.service.js.map