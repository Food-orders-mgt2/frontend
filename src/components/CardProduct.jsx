import React, { useState } from 'react';
import product from '../assets/product.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useCart } from '../context/CartContext';
import '../Style/CardForProduct.css';

export default function CardForProduct({ dish }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const ajouterAuPanier = () => {
    if (dish && typeof dish.price === 'number') {
      const nouveauProduit = {
        image: product,
        nom: dish.name || 'Nom du produit par défaut', 
        prix: dish.price,
        etat: isAddedToCart ? 'Ajouté' : 'En attente',
      };
      addToCart(nouveauProduit);

      setIsAddedToCart(true);
      console.log("Produit ajouté au panier :", nouveauProduit);
    } else {
      console.error('Invalid dish object or price property:', dish);
    }
  };

  return (
    <div className="card-body">
      <div className="col">
        <img className='img-product' src={product} alt="Logo" />
        <p className="mt-3">Prix: {dish && typeof dish.price === 'number' ? dish.price + '$' : 'Prix indisponible'}</p>
      </div>
      <div className="col">
        <h5 className="card-title">{dish ? dish.name : 'Nom du produit par défaut'} </h5>
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
