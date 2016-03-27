import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import {Hero} from './hero';
import { HeroService } from './hero.service';


@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
    @Input()
    hero: Hero;

    ngOnInit() {
        let id = Number(this._routeParams.get('id'));
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }

    goBack() {
        window.history.back();
    }
}