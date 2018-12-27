import {TestBed} from '@angular/core/testing';

import {MdAppService} from './md-app.service';

describe('MdAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MdAppService = TestBed.get(MdAppService);
    expect(service).toBeTruthy();
  });
});
