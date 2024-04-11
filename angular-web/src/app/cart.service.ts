import { Injectable } from '@angular/core';
import { Product } from './models/product.model'; 

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  addToCart(product: Product): void {
    const existingProductIndex = this.cart.findIndex(p => p.name === product.name);
    if (existingProductIndex !== -1) {
      const existingProduct = this.cart[existingProductIndex];
      existingProduct.quantity = (existingProduct.quantity || 0) + 1;
      this.cart[existingProductIndex] = existingProduct; 
    } else {
      product.quantity = 1; 
      this.cart.push(product);
    }
  }

  getCart(): Product[] {
    return this.cart;
  }

  removeFromCart(productName: string): void {
    const index = this.cart.findIndex(product => product.name === productName);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }
}
