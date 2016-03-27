import {Component} from 'angular2/core'
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-heroes',
    template: `
    <h1>{{title}}</h1>

    <h2>My Heroes</h2>
    <ul class="heroes">
        <li *ngFor="#hero of heroes"
            (click)="onSelect(hero)"
            [class.selected]="hero === selectedHero">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    styles:[`
      .selected {
        background-color: #CFD8DC;
        color: white;
      }
    `],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    ngOnInit() {
        this.getHeroes();
    }

    constructor(private _heroService: HeroService) { }

    heroes : Hero[];
    selectedHero: Hero;
    title = "Preybird's heroes";

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}