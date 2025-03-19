import { TestBed } from '@angular/core/testing';

import { CustomerObjectService } from './customer-object.service';

describe('CustomerObjectService', () => {
  let service: CustomerObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
