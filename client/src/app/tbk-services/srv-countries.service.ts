import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {Country} from '../tbk-domains/Country';
import {COUNTRIES} from '../mocks/mocks-country';

@Injectable({
    providedIn: 'root'
    })
    export class SrvCountriesService {

    countries : Country[] = [];

    constructor(private http: HttpClient) { }

    getCountries() : Observable<Country[]> {
        return this.http.get<Country[]>('/api/countries');
        //return of(COUNTRIES.filter(c => c.type == 4));
    }

    getZones() : Observable<Country[]> {
        return this.http.get<Country[]>('/api/zones');
        //return of(COUNTRIES.filter(c => c.type < 4));
    }
}
