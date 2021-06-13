import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { Travel } from '../tbk-domains/Travel';
import {TRAVELS} from '../mocks/mocks-travel';
import { TravelDay } from '../tbk-domains/TravelDay';

@Injectable({
    providedIn: 'root'
})

export class SrvTravelsService {

    travelData = TRAVELS;
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    constructor(private http: HttpClient) { }

    getTravels() : Observable<Travel[]> {
        return this.http.get<Travel[]>('/api/users/597ed1479cc86d2a30a3650e/travels')
            .pipe(map(data => data.map(t =>Travel.fromData(t))));
    }

    addTravel(travel : Travel){
        let travelData = {users:["1"], countries:travel.countries.map(c=>c.code), departDate:travel.departDate?.toISOString(), returnDate: travel.returnDate?.toISOString(), devises:[]};
        return this.http.post('/api/travels', travelData, this.httpOptions)
            .pipe(
                catchError(this.handleError('addTravel'))
            );;
    }

    private handleError<T>(operation = 'operation', result?: any) {
        return (error: any): Observable<T> => {
                console.error(error);
                return of(result as T);
        };
    }

    updateTravel(travel : Travel){
        let travelData = {id:travel.id?.toString(), users:["1"], countries:travel.countries.map(c=>c.code), departDate:travel.departDate?.toISOString(), returnDate: travel.returnDate?.toISOString(), devises:[]};
        return this.http.put(`/api/travels/`, travelData, this.httpOptions)
            .pipe(
                tap(_ => `update travel id=${travel.id}`),
                catchError(this.handleError<Travel>('updateTravel'))
            );
    }

    deleteTravel(travel : Travel){
        return this.http.delete<Travel>(`/api/travels/${travel.id}`, this.httpOptions)
            .pipe(
                tap(_ => `deleted travel id=${travel.id}`),
                catchError(this.handleError<Travel>('deleteTravel'))
            );
    }

}
