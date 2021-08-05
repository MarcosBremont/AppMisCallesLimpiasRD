import { TestBed } from '@angular/core/testing';

import { AyuntamientosService } from './ayuntamientos.service';

describe('AyuntamientosService', () => {
  let service: AyuntamientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AyuntamientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
