import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../../Share/models/product.model';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;
  
  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
