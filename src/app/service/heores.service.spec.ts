import { TestBed } from '@angular/core/testing';

import { HeoresService } from './heores.service';

describe('HeoresService', () => {
  let service: HeoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
