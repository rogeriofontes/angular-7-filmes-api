import { TestBed } from '@angular/core/testing';

import { CategoriasApiService } from './categorias-api.service';

describe('CatetoriasApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriasApiService = TestBed.get(CategoriasApiService);
    expect(service).toBeTruthy();
  });
});
