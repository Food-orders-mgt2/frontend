import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUtensils, faGift, faCheckCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import '../Style/DashboardForUser.css';
import { UserContext } from '../context/userContext';

export default function Dashboard() {

  const { currentUser } = useContext(UserContext);

  const username = currentUser ? currentUser.username : '';

  currentUser
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
          <FontAwesomeIcon icon={faCheckCircle} className="dashboard-icon" />
            <h2 className='h2-d'>Commande acceptée</h2>
            {"2"}
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12">
          <div className="dashboard-card">
            <FontAwesomeIcon icon={faUser} className="dashboard-icon" />
            <h2 className='h2-d'>Username: {username}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
