/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PartidoService } from './partido.service';

describe('PartidoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartidoService]
    });
  });

  it('should ...', inject([PartidoService], (service: PartidoService) => {
    expect(service).toBeTruthy();
  }));
});
