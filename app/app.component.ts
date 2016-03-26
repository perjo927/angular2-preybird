import {Component} from 'angular2/core'

interface Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'ng2-preybird-app',
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
    <div *ngIf="selectedHero">
        <h2>{{selectedHero.name}} details!</h2>
        <div>
            <label>id: </label>{{selectedHero.id}}
        </div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="selectedHero.name" placeholder="name">
        </div>
    </div>
      `,
    styles:[`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
    `]
})

export class AppComponent {
    public heroes = HEROES;
    public title = "Preybird's heroes";
    selectedHero: Hero;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}

var HEROES: Hero[] = [
    { "id": 11, "name": "Jimmy Smith" },
    { "id": 12, "name": "John Coltrane" },
    { "id": 13, "name": "Miles Davis" },
    { "id": 14, "name": "Aphex Twin" },
    { "id": 15, "name": "Chemical Brothers" },
    { "id": 16, "name": "Apollo 440" },
    { "id": 17, "name": "Squarepusher" },
    { "id": 18, "name": "Amon Tobin" },
    { "id": 19, "name": "Joey DeFrancesco" },
    { "id": 20, "name": "Wes Montgomery" }
];

