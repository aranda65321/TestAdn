import { TestBed } from '@angular/core/testing';

import { AdnApiRestServiceService } from './adn-api-rest-service.service';

describe('AdnApiRestServiceService', () => {
  let service: AdnApiRestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdnApiRestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
