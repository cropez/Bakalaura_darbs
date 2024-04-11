import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Autorizacija from "./Authorizacija";
import ShoppingCart from "./ShoppingCart";
import Profile from "./Profile";
import Catalog from "./Catalog";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    setCart((prevCart) => {
      const newQuantity = prevCart[product.name] ? prevCart[product.name].quantity + 1 : 1;
      return { ...prevCart, [product.name]: { ...product, quantity: newQuantity } };
    });
  };

  const removeFromCart = (productName) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[productName].quantity > 1) {
        newCart[productName].quantity -= 1;
      } else {
        delete newCart[productName];
      }
      return newCart;
    });
  };

  const login = () => setIsAuth(true);
  const   logout = () => {
    setIsAuth(false);
    setCart({});
  };

  return (
    <>
      <Header logout={logout} cartSize={Object.keys(cart).length} />
      <Routes>
        <Route path="/" element={isAuth ? <Navigate to="/catalog" /> : <Autorizacija login={login} />} />
        <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
        <Route path="/cart" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;