import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class ProductListService {

  constructor(private http:HttpClient) { }

  getProducts() {

    return this.http.get('http://127.0.0.1:3000/products');
}

getProductCat(){

  return this.http.get('http://127.0.0.1:3000/categories');
}
}
