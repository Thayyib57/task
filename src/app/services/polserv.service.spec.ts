import { TestBed } from '@angular/core/testing';

import { PolservService } from './polserv.service';

describe('PolservService', () => {
  let service: PolservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
