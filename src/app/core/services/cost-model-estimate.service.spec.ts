import { TestBed } from '@angular/core/testing';

import { CostModelEstimateService } from './cost-model-estimate.service';

describe('CostModelEstimateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CostModelEstimateService = TestBed.get(CostModelEstimateService);
    expect(service).toBeTruthy();
  });
});
