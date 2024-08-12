import { Component, inject, signal } from '@angular/core';
import {ProductComponent} from './../../components//product/product.component'
import { Product } from '../../../Share/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CommonModule, NgFor } from '@angular/common';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, NgFor, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {



  private cartService = inject(CartService);
  private productService = inject(ProductService)
  products = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      
    ]
  }

  ngOnInit(){
    this.productService.getProducts().subscribe({
      next : (products) => {
        products.forEach(product => product.creationAt = new Date().toISOString())
        this.products.set(products);
      }, 
      error: () => {

      }
    })
    
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
}

}
