import {Component} from 'angular2/core'
import {TrainService} from './train.service'
import { AutoGrowDirective } from './auto-grow.directive';

@Component({
    selector: 'trains',
    template: `
        <h2>Trains</h2>
        {{ title }}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="#train of trains">
            {{ train }}
            </li>
        </ul>
        `,
        providers: [TrainService]
        directives: [AutoGrowDirective]
})
export class TrainsComponent {
    title = "I like trains :-)";
    trains;

    constructor(trainService: TrainService){
        this.trains = trainService.getTrains();
    }
}