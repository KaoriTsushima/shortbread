import { TestBed } from '@angular/core/testing';

import { ShortbreadService } from './shortbread.service';

describe('ShortbreadService', () => {
  let service: ShortbreadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortbreadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
