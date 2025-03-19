import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { allowloadcustomerDashboardcomponentGuard } from './allowloadcustomer-dashboardcomponent.guard';

describe('allowloadcustomerDashboardcomponentGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => allowloadcustomerDashboardcomponentGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
