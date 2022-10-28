import { TestBed } from '@angular/core/testing';

import { VolunteerResolver } from './volunteer.resolver';

describe('VolunteerResolver', () => {
  let resolver: VolunteerResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(VolunteerResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
