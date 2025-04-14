import { TestBed } from '@angular/core/testing';

import { VisiblelistService } from './visiblelist.service';

describe('VisiblelistService', () => {
  let service: VisiblelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiblelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
