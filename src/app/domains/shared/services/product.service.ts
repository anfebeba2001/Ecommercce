import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../Share/models/product.model';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);
  constructor(private _sanitizer: DomSanitizer) {}

  getProducts(){
    return this.http.get<Product[]>("https://fakestoreapi.com/products");
  }

  getOne(id: string){
    return this.http.get<Product>("https://fakestoreapi.com/products"+ "/"+id);
  }
}




