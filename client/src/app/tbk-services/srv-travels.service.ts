import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Travel } from '../tbk-domains/Travel';
import {TRAVELS} from '../mocks/mocks-travel';

@Injectable({
  providedIn: 'root'
})

export class SrvTravelsService {

  travelData = TRAVELS;

  constructor() { }

  getTravels() : Observable<Travel[]> {
    let travels = this.travelData.map(t => Travel.fromData(t));
    return of(travels);
  }

  addTravel(travel : Travel){
    console.log(travel);
    if(travel.returnDate && travel.departDate && travel.users){
      this.travelData.push({_id:(this.travelData.length+1).toString(), users:[], countries:travel.countries, departDate:travel.departDate?.toISOString(), returnDate: travel.returnDate?.toISOString(), devises:[]});
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
