import React from 'react';
import CartItem from './CartItem';
import { useCart } from '../context/CartContext';
import '../Style/Carte.css'

const CartList = () => {
  const { cartItems } = useCart();

  return (
    <div className="cart-list">
      {cartItems.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartList;
