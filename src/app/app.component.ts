import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    secondes: number;
    counterSubsciption: Subscription;

    constructor( ) {

    }

    ngOnInit() {
        const counter = interval(1000);
        this.counterSubsciption = counter.subscribe(
            (value: number) => {
                this.secondes = value;
            }
        );
    }

    ngOnDestroy() {
        // détruit la souscription à l'observable à la fin de vie du component
        this.counterSubsciption.unsubscribe();
    }

}
