import React from 'react';
import '../Style/CardPrixTotal.css'
const PriceDashboard = ({ total }) => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body prix">
          <h5 className="card-title">Prix Total : </h5>
          <div className="price-dashboard">
            <h1 className="display-4">{total} 0 $</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDashboard;
