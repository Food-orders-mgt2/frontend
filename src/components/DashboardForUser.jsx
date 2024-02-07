import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUtensils, faGift, faMoneyBillWave, faChartBar } from '@fortawesome/free-solid-svg-icons';
import '../Style/DashboardForUser.css';

export default function Dashboard() {
  return (
    <div className="containers mt-5" >
      <div className="row">
        <div className="col-md-6">
          <div className="dashboard-card">
            <FontAwesomeIcon icon={faShoppingCart} className="dashboard-icon" />
            <h2 className='h2-d'>Commandes Récentes</h2>
            {"12"}
          </div>
        </div>
        <div className="col-md-6">
          <div className="dashboard-card">
            <FontAwesomeIcon icon={faUtensils} className="dashboard-icon" />
            <h2 className='h2-d'>Préférences Alimentaires</h2>
            {"Akondro"}
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <div className="dashboard-card">
            <FontAwesomeIcon icon={faGift} className="dashboard-icon" />
            <h2 className='h2-d'>Promotions en Cours</h2>
            {"20%"}
          </div>
        </div>
        <div className="col-md-6">
          <div className="dashboard-card">
            <FontAwesomeIcon icon={faMoneyBillWave} className="dashboard-icon" />
            <h2 className='h2-d'>Solde</h2>
            {"2000$"}
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12">
          <div className="dashboard-card">
            <FontAwesomeIcon icon={faChartBar} className="dashboard-icon" />
            <h2 className='h2-d'>Statistiques de Consommation</h2>
            {"10%"}
          </div>
        </div>
      </div>
    </div>
  );
}
