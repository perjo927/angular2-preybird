System.register(['angular2/core', 'angular2/router', './portfolio.service', "../card/card.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, portfolio_service_1, card_component_1;
    var ProjectDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (portfolio_service_1_1) {
                portfolio_service_1 = portfolio_service_1_1;
            },
            function (card_component_1_1) {
                card_component_1 = card_component_1_1;
            }],
        execute: function() {
            ProjectDetailComponent = (function (_super) {
                __extends(ProjectDetailComponent, _super);
                function ProjectDetailComponent(_routeParams, _portfolioService) {
                    _super.call(this);
                    this._routeParams = _routeParams;
                    this._portfolioService = _portfolioService;
                }
                ProjectDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = Number(this._routeParams.get('id'));
                    this._portfolioService.getProject(id)
                        .then(function (project) { return _this.card = project; });
                };
                ProjectDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'project-detail',
                        templateUrl: 'app/portfolio/project-detail.component.html',
                        styleUrls: ['app/portfolio/project-detail.component.css'],
                        directives: [card_component_1.CardComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, portfolio_service_1.PortfolioService])
                ], ProjectDetailComponent);
                return ProjectDetailComponent;
            }(card_component_1.CardComponent));
            exports_1("ProjectDetailComponent", ProjectDetailComponent);
        }
    }
});
//# sourceMappingURL=project-detail.component.js.map