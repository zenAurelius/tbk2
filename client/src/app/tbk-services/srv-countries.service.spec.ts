import { TestBed } from '@angular/core/testing';

import { SrvCountriesService } from './srv-countries.service';

describe('SrvCountriesService', () => {
    let service: SrvCountriesService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SrvCountriesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
