import { TestBed, inject } from '@angular/core/testing';

import { ServicesUserService } from './services-user.service';

describe('ServicesUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesUserService]
    });
  });

  it('should be created', inject([ServicesUserService], (service: ServicesUserService) => {
    expect(service).toBeTruthy();
  }));
});
