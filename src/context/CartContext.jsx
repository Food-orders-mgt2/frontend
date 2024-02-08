// CartContext.js

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Création du contexte
const CartContext = createContext();

// Définition du reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, id: uuidv4() }],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

// Création du fournisseur de contexte
export const CartProvider = ({ children }) => {
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [state, dispatch] = useReducer(cartReducer, { cartItems: storedCartItems });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const calculateTotal = () => {
    return state.cartItems.reduce((total, item) => {
      if (typeof item.price === 'number' && !isNaN(item.price)) {
        return total + item.price;
      } else {
        console.error(`Invalid price for item with id ${item.id}`);
        return total;
      }
    }, 0);
  };
  
  console.log(calculateTotal);

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, clearCart, calculateTotal, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Création du hook personnalisé
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
