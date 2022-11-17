import { TestBed } from '@angular/core/testing';

import { SportResultService } from './sport-result.service';

describe('SportResultService', () => {
  let service: SportResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
