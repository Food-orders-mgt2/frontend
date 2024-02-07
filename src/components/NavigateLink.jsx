import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faClipboardList, faUser } from '@fortawesome/free-solid-svg-icons';
import '../Style/NavigateLink.css';

const Navbar = () => {
  return (
    <section className="custom-navbar flex-column">
      <a href="#" className="nav-link flex-row gap-3">
        <FontAwesomeIcon className='icons' icon={faHome} />
        <span className="nav-text">Accueil</span>
      </a>
      <a href="#" className="nav-link flex-row gap-3">
        <FontAwesomeIcon className='icons' icon={faUtensils} />
        <span  className="nav-text">Menu</span>
      </a>
      <a href="#" className="nav-link flex-row gap-3">
        <FontAwesomeIcon className='icons' icon={faClipboardList} />
        <span className="nav-text">Commander</span>
      </a>
      <a href="#"  className="nav-link flex-row gap-3">
        <FontAwesomeIcon className='icons' icon={faUser} />
        <span className="nav-text">Contacts</span>
      </a>
    </section>
  );
};

export default Navbar;
