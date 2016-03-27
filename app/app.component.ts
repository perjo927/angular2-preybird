import { Component } from 'angular2/core';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';

@Component({
    selector: 'ng2-preybird-app',
    template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
    `,
    directives: [HeroesComponent],
    providers: [
        HeroService
    ]
})

export class AppComponent {
    title = "Preybird's Heroes";
}