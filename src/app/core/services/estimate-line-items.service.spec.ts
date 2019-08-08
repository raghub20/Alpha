import { TestBed } from '@angular/core/testing';

import { EstimateLineItemsService } from './estimate-line-items.service';

describe('EstimateLineItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstimateLineItemsService = TestBed.get(EstimateLineItemsService);
    expect(service).toBeTruthy();
  });
});
