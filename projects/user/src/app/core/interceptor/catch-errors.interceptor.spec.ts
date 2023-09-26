import { TestBed } from '@angular/core/testing';

import { CatchErrorsInterceptor } from './catch-errors.interceptor';

describe('CatchErrorsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CatchErrorsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CatchErrorsInterceptor = TestBed.inject(CatchErrorsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
