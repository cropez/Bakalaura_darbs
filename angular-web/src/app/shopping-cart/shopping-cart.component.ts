import { Component } from '@angular/core';
import { CartService } from '../cart.service'; 
import { Product } from '../models/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCart();
  }

  onRemoveFromCart(productName: string): void {
    this.cartService.removeFromCart(productName);
    this.cartItems = this.cartService.getCart(); 
  }
}
