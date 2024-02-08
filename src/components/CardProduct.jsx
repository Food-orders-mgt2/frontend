import React, { useState } from 'react';
import product from '../assets/product.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useCart } from '../context/CartContext';
import '../Style/CardForProduct.css';

export default function CardForProduct() {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const ajouterAuPanier = () => {
    addToCart({
      image: product,
      nom: 'Légumes',
      prix: 223,
      etat: isAddedToCart ? 'Ajouté' : 'En attente',
    });

    setIsAddedToCart(true);
    console.log("Produit ajouté au panier :", product);
  };

  return (
    <div className="card-body">
      <div className="col">
        <img className='img-product' src={product} alt="Logo" />
        <p className="mt-3">Prix: {223}$</p>
      </div>
      <div className="col">
        <h5 className="card-title">Légumes </h5>
        <p className="card-text">Découvrez une explosion de saveurs avec nos légumes délicieux .</p>
        <div className="row">
          <div className="col">
            <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
          </div>
          <div className="col">
            <button onClick={ajouterAuPanier} className="cart-button white-background " disabled={isAddedToCart}>
              {isAddedToCart ? (
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} />
              ) : (
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'yellow' }} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
