import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyRoutingModule } from './lazy-routing.module';
import { ProductInfoComponent } from './product-info/product-info.component';
// import { CalculatorComponent } from '../calculator/calculator.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
    RouterModule
  ],
  declarations: [ProductInfoComponent],
  exports: [ProductInfoComponent]
})
export class LazyModule { }
