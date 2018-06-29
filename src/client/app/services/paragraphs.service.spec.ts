import { TestBed, inject } from '@angular/core/testing';

import { ParagraphsService } from './paragraphs.service';

describe('ParagraphsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParagraphsService]
    });
  });

  it('should be created', inject([ParagraphsService], (service: ParagraphsService) => {
    expect(service).toBeTruthy();
  }));
});
