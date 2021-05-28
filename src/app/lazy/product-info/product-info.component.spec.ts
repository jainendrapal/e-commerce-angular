import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ProductInfoComponent } from './product-info.component';
import { ProductListService } from '../../product-list.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { of } from 'rxjs';
import { ProductCat } from '../../model/productCat.model';
describe('ProductInfoComponent', () => {
  let component: ProductInfoComponent;
  let fixture: ComponentFixture<ProductInfoComponent>;
  let httpMock: HttpTestingController;
  let testService: ProductListService;
  let productInfoComponent;
  let element;
  let userService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ ProductInfoComponent ],
      providers:[ProductListService]
    })
    .compileComponents();
    testService = TestBed.get(ProductListService);
    httpMock = TestBed.get(HttpTestingController);
  }));
   
  beforeEach(inject([ProductListService], s => {
    userService = s;
    fixture = TestBed.createComponent(ProductInfoComponent);
    productInfoComponent = fixture.componentInstance;
    element = fixture.nativeElement;
  }));
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ProductInfoComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it("should call getElectronicsProduct and return list of products category", async(() => {
    const response=[];
  
    spyOn(userService, 'getElectronicsItems').and.returnValue(of(response))
  
    productInfoComponent.getElectronicsProduct();
  
    fixture.detectChanges();
  
    expect(productInfoComponent.listOfProdCat).not.toBe(response);
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
