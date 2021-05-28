import { TestBed, inject, async  } from '@angular/core/testing';
import { ProductListService } from './product-list.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductListService', () => {
  let httpTestingController: HttpTestingController;
  let productListService: ProductListService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
 
    httpTestingController = TestBed.get(HttpTestingController);
  
  });  
  beforeEach(inject(
    [ProductListService],
    (service: ProductListService) => {
      productListService = service;
    }
  ));
  
  it("should add two numbers", () => {
    let result = productListService.addTwoNumbers(2, 3);
    expect(result).toEqual(5);
  });
  it("should return data", () => {
    let result:any;
    const productCat = [{
      "id": "1",
      "name": "Fashion"
    },
    {
      "id": 2,
      "name": "Appliances"
    },
    {
      "id": 3,
      "name": "Pantry"
    },
    {
      "id": 4,
      "name": "Electronics"
    }];
    productListService.getProductCat().subscribe(t => {
      result = t;
    });
    const req = httpTestingController.expectOne({
      method: "GET",
      url: 'http://127.0.0.1:3000/categories'
    });
   
    req.flush([productCat]);
   
    expect(result[0]).toEqual(productCat);
  });

  
});
