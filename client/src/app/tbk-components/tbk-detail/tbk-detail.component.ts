import { Component, Input, OnInit } from '@angular/core';
import { Evenement } from 'src/app/tbk-domains/Evenement';
import { Travel } from 'src/app/tbk-domains/Travel';
import { TravelDay } from 'src/app/tbk-domains/TravelDay';
import { SrvEvenementsService } from 'src/app/tbk-services/srv-evenements.service';

@Component({
    selector: 'tbk-detail[travel]',
    templateUrl: './tbk-detail.component.html',
    styleUrls: ['./tbk-detail.component.scss']
})
export class TbkDetailComponent implements OnInit {

    @Input() travel: Travel;
    selectedDayIndex : number = 0;
    selectedEvenement : Evenement | undefined;
    evenements : Evenement[] = [];

    constructor(private srvEvenement : SrvEvenementsService) { }

    ngOnInit(): void {
        console.log(this.travel);
        this.getEvenements();
    }

    public getEvenements(){
        this.srvEvenement.getEvenements(this.travel)
        .subscribe(evenements => {
            console.log(evenements);
            this.evenements = evenements.map(e => Evenement.fromData(e));
            this.setEvenementsPerDay();
        });
    }

    setEvenementsPerDay(){
        let travelLength = this.travel.days.length - 1;
        let dd = this.travel.departDate || new Date();
        let dr = this.travel.returnDate || new Date();
            this.travel.days[0].evenements = this.evenements.filter( e => e.date < dd );
            for(let i = 1; i < travelLength; i++) {
                this.travel.days[i].evenements = this.evenements.filter( ope => (ope.date >= this.travel.days[i].date &&  ope.date < this.travel.days[i+1].date) );
            }
            this.travel.days[travelLength].evenements = this.evenements.filter( ope => ope.date > dr );
        
    }

    prevDay(): void {
        if(this.selectedDayIndex > 0) { this.selectedDayIndex--; }
    }

    nextDay(): void {
        if(this.selectedDayIndex < this.travel.days.length - 1) { this.selectedDayIndex++; }
    }

    selectedDay() : TravelDay {
        return this.travel.days[this.selectedDayIndex]
    }

    selectEvenement(evt : Evenement){

    }


}
