import { TestBed, inject } from '@angular/core/testing';

import { ChromeRouterService } from './chrome-router.service';

describe('ChromeRouterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChromeRouterService]
    });
  });

  it('should be created', inject([ChromeRouterService], (service: ChromeRouterService) => {
    expect(service).toBeTruthy();
  }));
});
