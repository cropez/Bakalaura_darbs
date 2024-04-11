<template>
    <div class="cart-container">
      <h2>Jūsu grozs</h2>
      <div v-if="cart.length > 0">
        <div class="cart-item" v-for="(item, index) in cart" :key="index">
          <div>{{ item.name }} - {{ item.quantity }} pcs</div>
          <div>
            <button @click="decrement(item)">-</button>
            <button @click="increment(item)">+</button>
            <button @click="removeFromCart(item)">Noņemt</button>
          </div>
        </div>
        <div class="total">
          Kopā: {{ totalPrice }} €
        </div>
        <button @click="checkout">Izrakstīties</button>
      </div>
      <div v-else>
        <p>Jūsu grozs ir tukšs.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Cart',
    data() {
      return {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
      };
    },
    computed: {
      totalPrice() {
        return this.cart.reduce((acc, item) => acc + (item.quantity * parseFloat(item.price)), 0).toFixed(2);
      },
    },
    methods: {
      removeFromCart(item) {
        this.cart = this.cart.filter(p => p.name !== item.name);
        localStorage.setItem('cart', JSON.stringify(this.cart));
      },
      increment(item) {
        item.quantity++;
        localStorage.setItem('cart', JSON.stringify(this.cart));
      },
      decrement(item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.removeFromCart(item);
        }
        localStorage.setItem('cart', JSON.stringify(this.cart));
      },
      checkout() {
        alert('Notiek norēķināšanās...');
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  