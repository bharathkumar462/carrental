import { TestBed } from '@angular/core/testing';

import { CarrentalserviceService } from './carrentalservice.service';

describe('CarrentalserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarrentalserviceService = TestBed.get(CarrentalserviceService);
    expect(service).toBeTruthy();
  });
});
