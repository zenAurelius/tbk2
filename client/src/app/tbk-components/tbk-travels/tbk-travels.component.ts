import { Component, OnInit, Input } from '@angular/core';

import { Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/tbk-domains/Country';
import { ChartType} from 'angular-google-charts';

import { Travel } from 'src/app/tbk-domains/Travel';
import { SrvTravelsService } from 'src/app/tbk-services/srv-travels.service';


@Component({
    selector: 'tbk-travels',
    templateUrl: './tbk-travels.component.html',
    styleUrls: ['./tbk-travels.component.scss']
})


export class TbkTravelsComponent implements OnInit {

    @Input() countries : Country[] | undefined;
    @Input() zones : Country[] | undefined;
    @Output() selectTravelEvent = new EventEmitter<Travel>();
    travels : Travel[] = [];
    selectedTravel : Travel | undefined;
    addedTravel : Travel | undefined;
    shownAction : string = 'list';
    friends : any[] = [{firstname:'Dorine'}];
    
    type: ChartType = ChartType.GeoChart;
    mapData :any[] = [];
    mapColumns : any[] = [];
    mapHeight : number = 500;
    mapWidth : number = 1000;
    mapOptions = {
        region:'world',
        resolution :'country',
        backgroundColor: '#81d4fa',
    };


    constructor(private srvTravel : SrvTravelsService) { }

    ngOnInit(): void {
        this.getTravels();
    }

    public getTravels(){
        this.srvTravel.getTravels()
        .subscribe(travels => {
            this.travels = travels;
            let data : any = {};
            this.travels.forEach(t => {
                t.countries = t.countries.map(c => this.countries?.find(co => co.code == c));
                t.countriesNames = t.countries.map(c => c.name_fr).join(', ');
                t.countries.forEach(c => {
                    data[c.code] = data[c.code] || {'value':0, 'label':c.name_fr};
                    data[c.code].value += 1;
                });
            });
            this.mapColumns = ['Country', 'Value', {role: 'tooltip', type:'string'}];
            this.mapData = Object.entries(data).map(e => [{'v':e[0],'f':(<any>e[1]).label}, (<any>e[1]).value]);
            console.log(this.mapData)
        });

    }

    public selectTravel( travel? : Travel ) {
        console.log(travel);
        this.selectTravelEvent.emit(travel);
        this.selectedTravel = travel;
    }

    onMapOptionChange(){
        console.log('change');
        this.mapData = Object.assign([], this.mapData);
        this.mapOptions = Object.assign([], this.mapOptions);
    }
    

    openAddTravel(){
        this.addedTravel = Travel.fromScratch();
        this.shownAction = 'add';
    }

    openUpdateTravel(){
        this.addedTravel = Object.assign({}, this.selectedTravel);
        this.shownAction = 'update';
    }

    addTravel(){
        //travel.users.push(this.parent.connectedUser);
        if(this.addedTravel) {
            this.srvTravel.addTravel(this.addedTravel);
            this.getTravels();
            this.shownAction = 'list';
        }
    }

    updateTravel(){
        //travel.users.push(this.parent.connectedUser);
        if(this.addedTravel) {
            this.srvTravel.updateTravel(this.addedTravel);
            this.getTravels();
            this.shownAction = 'list';
        }
    }

    deleteTravel(){
        if(this.selectedTravel){
            this.srvTravel.deleteTravel(this.selectedTravel);
            this.getTravels();
            this.selectTravel();
        }
    }

}
