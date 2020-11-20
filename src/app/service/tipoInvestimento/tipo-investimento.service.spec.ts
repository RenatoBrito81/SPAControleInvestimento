import { TestBed } from '@angular/core/testing';

import { TipoInvestimentoService } from './tipo-investimento.service';

describe('TipoInvestimentoService', () => {
  let service: TipoInvestimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoInvestimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
