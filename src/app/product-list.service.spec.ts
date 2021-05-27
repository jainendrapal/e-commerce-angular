import { TestBed, inject } from '@angular/core/testing';

import { ProductListService } from './product-list.service';

describe('ProductListService', () => {
  let ProductListService :  ProductListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductListService]
    });

    ProductListService = TestBed.get('ProductListService')
  });

  it('should be created', inject([ProductListService], (service: ProductListService) => {
    expect(service).toBeTruthy();
  }));
});
