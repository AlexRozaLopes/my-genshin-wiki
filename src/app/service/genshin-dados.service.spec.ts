import { TestBed } from '@angular/core/testing';

import { GenshinDadosService } from './genshin-dados.service';

describe('GenshinDadosService', () => {
  let service: GenshinDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenshinDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
