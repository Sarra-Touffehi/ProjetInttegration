import { TestBed } from '@angular/core/testing';

import { TypePartenaireService } from './type-partenaire.service';

describe('TypePartenaireService', () => {
  let service: TypePartenaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypePartenaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
