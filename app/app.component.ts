import {Component} from 'angular2/core';
import {TrainsComponent} from './trains.component';

@Component({
    selector: 'my-app',
    template: '<h1>CRAZY TRAIN</h1><trains></trains>',
    directives: [TrainsComponent]
})
export class AppComponent { }