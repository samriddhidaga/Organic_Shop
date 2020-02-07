import { TestBed } from '@angular/core/testing';

import { CourseRegService } from './course-reg.service';

describe('CourseRegService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseRegService = TestBed.get(CourseRegService);
    expect(service).toBeTruthy();
  });
});
