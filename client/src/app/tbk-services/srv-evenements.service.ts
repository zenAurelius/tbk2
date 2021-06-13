import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Evenement } from '../tbk-domains/Evenement';
import { Travel } from '../tbk-domains/Travel';

@Injectable({
    providedIn: 'root'
})
export class SrvEvenementsService {

    constructor(private http: HttpClient) { }

    getEvenements(travel: Travel) : Observable<Evenement[]> {
        return this.http.get<Evenement[]>(`/api/travels/${travel.id}/evenements`);
        //return of(COUNTRIES.filter(c => c.type == 4));
    }
}
