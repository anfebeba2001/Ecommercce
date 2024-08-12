import { Component, Input, Output, EventEmitter, signal, WritableSignal } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Product } from '../../../Share/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, NgFor, ReversePipe,TimeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  
  @Input({required: true}) product!: Product;
  @Input({required: false}) creationAt:WritableSignal<string> = signal(new Date().toISOString());
  @Output() addToCart = new EventEmitter();

  
  addToCartHandler() {
    console.log(this.creationAt);
    console.log("clickFromChild");
    this.addToCart.emit(this.product);
  }
  


  

  
  


}
