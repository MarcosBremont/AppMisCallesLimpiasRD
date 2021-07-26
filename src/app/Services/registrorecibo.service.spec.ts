import { TestBed } from '@angular/core/testing';

import { RegistroreciboService } from './registrorecibo.service';

describe('RegistroreciboService', () => {
  let service: RegistroreciboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroreciboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
