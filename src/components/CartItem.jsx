import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useCart } from '../context/CartContext';

const CartItem = ({ product }) => {
  const { removeFromCart } = useCart();

  const annulerProduit = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="cart-item">
      <img className='cart-item-img' src={product.image} alt={product.nom} />
      <div className="cart-item-details">
        <p>{product.nom}</p>
        <p>Prix: {product.prix}$</p>
        <button onClick={annulerProduit} className="annuler-button">
          <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
