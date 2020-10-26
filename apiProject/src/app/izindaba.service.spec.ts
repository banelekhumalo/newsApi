import { TestBed } from '@angular/core/testing';

import { IzindabaService } from './izindaba.service';

describe('IzindabaService', () => {
  let service: IzindabaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IzindabaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
