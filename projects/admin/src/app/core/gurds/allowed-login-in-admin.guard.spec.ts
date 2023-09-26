import { TestBed } from '@angular/core/testing';

import { AllowedLoginInAdminGuard } from './allowed-login-in-admin.guard';

describe('AllowedLoginInAdminGuard', () => {
  let guard: AllowedLoginInAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllowedLoginInAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
