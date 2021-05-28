import { async, ComponentFixture, TestBed,inject  } from '@angular/core/testing';
import {ProductListService} from '../product-list.service';
import { HomeComponent,  } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { of } from 'rxjs';
import { Product} from '../model/product.model';
describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let httpMock: HttpTestingController;
  let testService: ProductListService;
  let userService;
  let homeComponent;
  let element;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ HomeComponent ],

      providers:[ProductListService]
    })
    .compileComponents();
    testService = TestBed.get(ProductListService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(inject([ProductListService], s => {
    userService = s;
    fixture = TestBed.createComponent(HomeComponent);
    homeComponent = fixture.componentInstance;
    element = fixture.nativeElement;
  }));
 
it("should call getProductList and return list of products", async(() => {
  const response: Product[]=[];

  spyOn(userService, 'getProductCat').and.returnValue(of(response))

  homeComponent.getProductCatList();

  fixture.detectChanges();

  expect(homeComponent.listOfProd).toEqual(response);
}));

  
});
