import { TestBed } from '@angular/core/testing';

import { SrvEvenementsService } from './srv-evenements.service';

describe('SrvEvenementsService', () => {
  let service: SrvEvenementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvEvenementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
