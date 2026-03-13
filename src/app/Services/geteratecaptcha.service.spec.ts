import { TestBed } from '@angular/core/testing';

import { GeteratecaptchaService } from './geteratecaptcha.service';

describe('GeteratecaptchaService', () => {
  let service: GeteratecaptchaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeteratecaptchaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
