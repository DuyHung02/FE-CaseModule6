import { TestBed } from '@angular/core/testing';

import { CreatPlaylistService } from './creat-playlist.service';

describe('CreatPlaylistService', () => {
  let service: CreatPlaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatPlaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
