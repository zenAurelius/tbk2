import { Component, Input, OnInit } from '@angular/core';
import { Travel } from 'src/app/tbk-domains/Travel';
import { TravelDay } from 'src/app/tbk-domains/TravelDay';

@Component({
    selector: 'tbk-detail',
    templateUrl: './tbk-detail.component.html',
    styleUrls: ['./tbk-detail.component.scss']
})
export class TbkDetailComponent implements OnInit {

    @Input() travel!: Travel;
    selectedDayIndex : number = 0;

    constructor() { }

    ngOnInit(): void {
        console.log(this.travel);
    }

    prevDay(): void {
        if(this.selectedDayIndex > 0) { this.selectedDayIndex--; }
    }

    nextDay(): void {
        if(this.selectedDayIndex < this.travel.days.length - 1) { this.selectedDayIndex++; }
    }

    selectedDay() : TravelDay | undefined {
        return this.travel?.days[this.selectedDayIndex]
    }


}
