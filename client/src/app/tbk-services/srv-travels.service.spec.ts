import { TestBed } from '@angular/core/testing';

import { SrvTravelsService } from './srv-travels.service';

describe('SrvTravelsService', () => {
  let service: SrvTravelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvTravelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
