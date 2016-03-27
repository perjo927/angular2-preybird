import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Card } from './card';
import { CardService } from './card.service';


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