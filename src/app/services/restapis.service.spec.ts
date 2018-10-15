import { TestBed, inject } from '@angular/core/testing';

import { RestapisService } from './restapis.service';

describe('RestapisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestapisService]
    });
  });

  it('should be created', inject([RestapisService], (service: RestapisService) => {
    expect(service).toBeTruthy();
  }));
});
