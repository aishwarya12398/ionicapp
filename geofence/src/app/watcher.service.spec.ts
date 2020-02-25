import { TestBed } from '@angular/core/testing';

import { WatcherService } from './watcher.service';

describe('WatcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WatcherService = TestBed.get(WatcherService);
    expect(service).toBeTruthy();
  });
});
