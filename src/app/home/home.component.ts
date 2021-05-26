import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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

// navigate(prodCat){
//   this.router.navigateByUrl('/products', {skipLocationChange: true});
//   this.location.replaceState('/products/'prodCat.id);

// }
}

export interface Product {
  value: string ;
  viewValue: string;
}