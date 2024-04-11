<template>
    <header class="app-header">
      <nav class="navbar">
        <div class="logo" @click="navigateTo('/')">Veikals</div>
        <ul class="nav-links">
          <li v-for="(item, index) in menuItems" :key="index">
            <a href="" @click.prevent="handleButtonClick(item.pageURL)">
              {{ item.menuTitle }}
            </a>
          </li>
        </ul>
        <button class="cart-button" @click="openCart">
          Cart
        </button>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const menuItems = [
    { menuTitle: "Registracija", pageURL: "/register" },
    { menuTitle: "Profile", pageURL: "/profile" },
    { menuTitle: "Kontakti", pageURL: "/contacts" },
    { menuTitle: "Iziet", pageURL: "/logout" },
  ];
  
  const navigateTo = (url) => {
    router.push(url);
  };
  
  const handleButtonClick = (pageURL) => {
    if (pageURL === "/logout") {
      window.localStorage.removeItem('auth');
      navigateTo('/');
    } else {
      navigateTo(pageURL);
    }
  };
  
  const openCart = () => {
    navigateTo('/cart');
  };
  </script>
  
  <style scoped>
  .app-header {
    background-color: green;
    color: white;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
  }
  
  .logo {
    cursor: pointer;
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .nav-links a:hover {
    color: #ccc;
  }
  
  .cart-button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .cart-button:hover {
    color: #ccc;
  }
  </style>
  