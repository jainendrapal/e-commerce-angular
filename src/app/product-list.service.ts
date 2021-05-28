import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class ProductListService {

  constructor(private http:HttpClient) { }

  getProducts(): Observable<any> {

    return this.http.get('http://127.0.0.1:3000/products');
}

getProductCat(): Observable<any>{
  return this.http.get('http://127.0.0.1:3000/categories');
}

getElectronicsItems(){
  return this.http.get('http://127.0.0.1:3000/electronics');
}

addTwoNumbers(a:number,b:number){
  return a + b;
}
}
