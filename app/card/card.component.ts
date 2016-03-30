import { Component, Input } from 'angular2/core';
import { Card } from './card';


@Component({
    selector: 'card',
    templateUrl: 'app/card/card.component.html',
    styleUrls: ['app/card/card.component.css']
})

export class CardComponent {
    @Input()
    card: Card;

    goBack() {
        window.history.back();
    }
}