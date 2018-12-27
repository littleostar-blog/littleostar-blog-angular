import {TestBed} from '@angular/core/testing';

import {CoreIndexService} from './core-index.service';

describe('CoreIndexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreIndexService = TestBed.get(CoreIndexService);
    expect(service).toBeTruthy();
  });
});
