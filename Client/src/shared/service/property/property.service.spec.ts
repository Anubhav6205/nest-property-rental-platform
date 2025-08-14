import { TestBed } from '@angular/core/testing';

import { PropertyService } from './property.service';

describe('PropertyService', () => {
  let service: PropertyService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(PropertyService);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it("my first unit test", () => {
    const abc = 10;
    expect(abc).toBe(10);
  })
});
