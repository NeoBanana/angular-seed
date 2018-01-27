import { TestBed, inject } from '@angular/core/testing';

import { CommitteesService } from './committees.service';

describe('CommitteesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommitteesService]
    });
  });

  it('should be created', inject([CommitteesService], (service: CommitteesService) => {
    expect(service).toBeTruthy();
  }));
});
