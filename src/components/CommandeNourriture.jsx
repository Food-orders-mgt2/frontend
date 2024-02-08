import React from "react";
import BarCommande from './BarCommande'
import CartList from './CartList'
import CardPrixTotal from './CardPrixTotal'
import { useCart } from '../context/CartContext'; 

export default function CommandeNourriture(){
  const { cartItems } = useCart(); 

  console.log("Contexte du panier dans CommandeNourriture :", cartItems);

  return (
    <>
      <BarCommande/>
      <CartList/>
      <CardPrixTotal/>
    </>
  );
}
