import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import '../Style/CardPrixTotal.css';
import { useCart } from '../context/CartContext';

const PriceDashboard = () => {
  const { calculateTotal } = useCart();

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body prix">
          <h5 className="card-title">Prix Total :</h5>
          <div className="price-dashboard">
            <span className="price-icon">
              <FontAwesomeIcon icon={faDollarSign} style={{ color: 'orange', marginRight: '5px' }} />
            </span>
            <span className="price-amount">
              {calculateTotal().toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDashboard;
