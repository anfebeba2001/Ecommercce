import { Component, inject, Input, signal } from '@angular/core';
import { ProductService } from '@shared/services/product.service';
import { Product } from '../../../Share/models/product.model';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [UpperCasePipe, CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() id? : string;
  product = signal<Product | null>(null);
  private productService = inject(ProductService)
  private cartService = inject(CartService)

  ngOnInit(){
    if(this.id)
    {
      
      this.productService.getOne(this.id)
      .subscribe({
        next:(product) => 
        {          
          this.product.set(product);
        }
      })
    }
    
  }

  addToCart(){
    const product = this.product();
    if(product)
    {
      this.cartService.addToCart(product);
    }
    
  }
}
