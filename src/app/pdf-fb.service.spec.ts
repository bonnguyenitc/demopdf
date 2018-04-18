import { TestBed, inject } from '@angular/core/testing';

import { PdfFbService } from './pdf-fb.service';

describe('PdfFbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdfFbService]
    });
  });

  it('should be created', inject([PdfFbService], (service: PdfFbService) => {
    expect(service).toBeTruthy();
  }));
});
