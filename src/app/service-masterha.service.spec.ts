import { TestBed } from '@angular/core/testing';

import { ServiceMasterhaService } from './service-masterha.service';

describe('ServiceMasterhaService', () => {
  let service: ServiceMasterhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMasterhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
