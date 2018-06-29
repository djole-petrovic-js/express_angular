import { TestBed, inject } from '@angular/core/testing';

import { GaleriesService } from './galeries.service';

describe('GaleriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GaleriesService]
    });
  });

  it('should be created', inject([GaleriesService], (service: GaleriesService) => {
    expect(service).toBeTruthy();
  }));
});
