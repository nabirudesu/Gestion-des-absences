import { TestBed } from '@angular/core/testing';

import { TeacherabsencesService } from './teacherabsences.service';

describe('TeacherabsencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherabsencesService = TestBed.get(TeacherabsencesService);
    expect(service).toBeTruthy();
  });
});
