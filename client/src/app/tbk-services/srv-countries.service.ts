import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import {Country} from '../tbk-domains/Country';
import {COUNTRIES} from '../mocks/mocks-country';

@Injectable({
    providedIn: 'root'
    })
    export class SrvCountriesService {

    constructor() { }

    getCountries() : Observable<Country[]> {
        return of(COUNTRIES);
    }
}
