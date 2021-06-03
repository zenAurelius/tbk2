import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Travel } from '../tbk-domains/Travel';
import {TRAVELS} from '../mocks/mocks-travel';
import { TravelDay } from '../tbk-domains/TravelDay';

@Injectable({
    providedIn: 'root'
})

export class SrvTravelsService {

    travelData = TRAVELS;

    constructor(private http: HttpClient) { }

    getTravels() : Observable<Travel[]> {
        return this.http.get<Travel[]>('/api/users/1/travels')
            .pipe(map(data => data.map(t =>Travel.fromData(t))));
    }

    addTravel(travel : Travel){
        console.log(travel);
        if(travel.returnDate && travel.departDate && travel.users){
            this.travelData.push({_id:(this.travelData.length+1).toString(), users:[], countries:travel.countries, departDate:travel.departDate?.toISOString(), returnDate: travel.returnDate?.toISOString(), devises:[]});
        }
        console.log(this.travelData);
    }

    updateTravel(travel : Travel){
        console.log(travel);
        let modifiedTravel = this.travelData.find(t => t._id == travel._id);

        if(modifiedTravel){
            modifiedTravel.countries = travel.countries;
            modifiedTravel.departDate = travel.departDate?.toISOString() || '';
            modifiedTravel.returnDate = travel.returnDate?.toISOString() || '';
        }
        console.log(this.travelData);
    }

    deleteTravel(travel : Travel){
        console.log('delete', this.travelData);
        console.log(this.travelData.findIndex(t => t._id == travel._id));
        console.log(this.travelData.slice(3,1));
        this.travelData.splice(this.travelData.findIndex(t => t._id == travel._id),1);
        console.log('delete', this.travelData);
    }

}
