import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient);
  constructor() { }

  getAll()
  {
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories');
  }
}
