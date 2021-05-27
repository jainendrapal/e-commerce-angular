import { Component, OnInit, } from '@angular/core';
import { ProductListService} from '../.././product-list.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  data:any;
  newData= [];
  constructor(public __productservice:ProductListService,private route:ActivatedRoute) { }
  urlParam;
  ngOnInit() {
    // this.urlParam = this.route.snapshot.paramMap.get('id');
     
    // console.log(this.urlParam)
    this.getelectronicsProduct();

    
  }

  getelectronicsProduct(){
    this.__productservice.getElectronicsItems().subscribe(res =>{
      this.data=res; 
      
      },error =>{
        console.log(error)
      })
  }

}
