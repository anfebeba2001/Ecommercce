import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Product } from '../../../Share/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  @Input({required: true}) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log("clickFromChild");
    this.addToCart.emit("Hola este es un msg desde el hijo" + this.product.title);
  }


}
