import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faClipboardList, faUser } from '@fortawesome/free-solid-svg-icons';
import '../Style/NavigateLink.css';

const Navbar = () => {
  return (
    <section className="custom-navbar flex-column ">
      <a href="#" className="nav-link  flex-row gap-3">
        <FontAwesomeIcon icon={faHome} />
        Accueil
      </a>
      <a href="#" className="nav-link flex-row gap-3">
        <FontAwesomeIcon icon={faUtensils} />
        Menu
      </a>
      <a href="#" className="nav-link flex-row gap-3">
        <FontAwesomeIcon icon={faClipboardList} />
        Commander
      </a>
      <a href="#" className="nav-link flex-row gap-3">
        <FontAwesomeIcon icon={faUser} />
        Contacts
      </a>
    </section>
  );
};

export default Navbar;
