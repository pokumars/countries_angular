import { TestBed } from '@angular/core/testing';

import { UtilityFxnsService } from './utility-fxns.service';

describe('UtilityFxnsService', () => {
  let service: UtilityFxnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityFxnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
