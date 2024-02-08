import React from 'react';
import '../Style/CardPrixTotal.css';
import { useCart } from '../context/CartContext';

const PriceDashboard = () => {
  const { calculateTotal } = useCart();

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body prix">
          <h5 className="card-title">Prix Total : </h5>
          <div className="price-dashboard">
            {calculateTotal()} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDashboard;
