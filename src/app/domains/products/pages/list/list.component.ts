import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import {ProductComponent} from './../../components//product/product.component'
import { Product } from '../../../Share/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CommonModule, NgFor } from '@angular/common';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, NgFor, HeaderComponent,RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  @Input() category? : string;
  private cartService = inject(CartService);
  private productService = inject(ProductService)
  private categoriesService = inject(CategoryService);
  counter = 0;
  products = signal<Product[]>([]);
  categories = signal<string[]>([])

  constructor() {
    const initProducts: Product[] = [
      
    ]
  }

  ngOnInit(){
    this.getCategories();
    this.getProducts();
  
  }

  ngOnChanges(changes: SimpleChanges){
    const category = changes['category']
    if(category)
    {
      this.getProducts(category.currentValue)
    }

  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }


getProducts(categoryFilter? : string)
{
  this.products.set([]);

  this.counter = 0;
  this.productService.getProducts().subscribe({
    next : (products) => {
      products.forEach(product => 
        {
          product.creationAt = new Date().toISOString();
          this.counter++;
          product.id = this.counter;
          if(categoryFilter && categoryFilter == product.category)
          {
            this.products.update(prevState => prevState.concat(product))
          }
    });
      
    if(!categoryFilter){
      
      this.products.set(products);
    }
      
    }, 
    error: () => {

    }
  })
}

getCategories()
{
  this.categoriesService.getAll().subscribe({
    next : (categories) => {
      this.categories.set(categories);
    }
  })
}

}
