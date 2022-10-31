import { TestBed } from '@angular/core/testing';

import { GambisService } from './gambis.service';

describe('GambisService', () => {
  let service: GambisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GambisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
