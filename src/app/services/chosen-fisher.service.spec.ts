import { TestBed } from '@angular/core/testing';

import { ChosenFisherService } from './chosen-fisher.service';

describe('ChosenFisherService', () => {
  let service: ChosenFisherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChosenFisherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
