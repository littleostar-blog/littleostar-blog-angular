import {TestBed} from '@angular/core/testing';

import {MdBeanService} from './md-bean.service';

describe('MdBeanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MdBeanService = TestBed.get(MdBeanService);
    expect(service).toBeTruthy();
  });
});
