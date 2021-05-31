import { routes } from './routes';
import { AppComponent } from './app.component';
import { ProductInfoComponent } from './lazy/product-info/product-info.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
describe("Router:App",()=>{
    let location : Location;
    let router : Router;
    let fixture;

    beforeEach(()=>{
      TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes),HttpClientModule],
      declarations: [AppComponent,HomeComponent,ProductInfoComponent]
      });
     
      router = TestBed.get(Router);
      location = TestBed.get(Location);
      fixture = TestBed.createComponent(AppComponent);
      router.initialNavigation();
    });

    
      it('navigate to "" redirects to home', fakeAsync(() => {
        router.navigate([""]).then(() => {
          expect(location.path()).toBe("/home");
        });
      }));

      it('navigate to "product-info/:id" redirect to product-info', fakeAsync(() => {
        router.navigate(["/product-info/:id"]).then(() => {
          expect(location.path()).toBe("/product-info/:id");
        });
      }));
})