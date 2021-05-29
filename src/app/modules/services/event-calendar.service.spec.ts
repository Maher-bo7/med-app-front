import { TestBed } from '@angular/core/testing';

import { EventCalendarService } from './event-calendar.service';

describe('EventCalendarService', () => {
  let service: EventCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
