import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ProductListService } from '../product-list.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedValue: string;
  constructor(public __productservice:ProductListService, private location: Location, private router: Router) { }
 
  searchedByClicked = false;
  products:any; 
  productCategory:any;
   catId;
  ngOnInit() {
     
    this.getProductList();
    this.getProductCatList();

  }
getProductList(){
  
  this.__productservice.getProducts().subscribe( data =>{

    // console.log('Products', data['Electronics']);
    this.products = data;
    console.log('Products', this.products);
  }, error =>{
     console.log(error);
  });

}

getProductCatList(){
 this.__productservice.getProductCat().subscribe(data => {
      //  console.log(data)
       this.productCategory = data;
       console.log("categories",this.productCategory)
 }, error => {
   console.log(error)
 })

}

getProductByCatgory(){
  this.searchedByClicked = true;
}
sendCategoryId(id){
 this.catId=id;
}

}

export interface Product {
  value: string ;
  viewValue: string;
}