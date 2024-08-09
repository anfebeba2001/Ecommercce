import { Component, signal } from '@angular/core';
import {ProductComponent} from './../../components//product/product.component'
import { Product } from '../../../Share/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, NgFor, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([{
    id: Date.now() +4,
    title: 'pro 1', 
    price: 100,
    image: 'https://picsum.photos/640/640?r=23',
    creationAt: new Date().toISOString()
  
  
  },
  {
    id: Date.now()+3 ,
    title: 'pro 2', 
    price: 400,
    image: 'https://picsum.photos/640/640?r=12',
    creationAt: new Date().toISOString()
  
  
  },{
    id: Date.now() +2,
    title: 'pro 3', 
    price: 800,
    image: 'https://picsum.photos/640/640?r=11',
    creationAt: new Date().toISOString()
  
  
  },{
    id: Date.now() +1,
    title: 'pro 4', 
    price: 1600,
    image: 'https://picsum.photos/640/640?r=14',
    creationAt: new Date().toISOString()
  
  
  } ]);

  constructor() {
    const initProducts: Product[] = [
      
    ]
  }

  fromChild(event: string) {
    console.log("Estamos en el padre");
    console.log(event);
}

}
