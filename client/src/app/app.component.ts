import { Component, OnInit } from '@angular/core';
import {Travel} from './tbk-domains/Travel';
import { Country } from 'src/app/tbk-domains/Country';

import { SrvCountriesService } from 'src/app/tbk-services/srv-countries.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    title : string = 'TBK (2)';
    selectedTravel : Travel | undefined;
    countries : Country[] | undefined;
    zones : Country[] | undefined;
    page : string = 'TRAVELS';
    
    constructor(private srvCountries : SrvCountriesService) { }

    ngOnInit(): void {
        this.srvCountries.getCountries()
            .subscribe(countries => this.countries = countries);
        this.srvCountries.getZones()
            .subscribe(zones => this.zones = zones);
    }

    selectTravel(travel: Travel){
        console.log('parent', travel);
        this.selectedTravel = travel;
    }

    navigateTo(destination: string){
        this.page = destination;
    }


}
