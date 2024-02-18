import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faClipboardList, faUser } from '@fortawesome/free-solid-svg-icons';
import '../Style/NavigateLink.css';

const Navbar = () => {
  const pathname = window.location.pathname;

  return (
    <section className="custom-navbar flex-column">
      <a href="/private/private-home" className={`nav-link flex-row gap-3 ${pathname === '/private/private-home' ? 'active' : ''}`}>
        <FontAwesomeIcon className='icons' icon={faHome} />
        <span className="nav-text">Acceuil</span>
      </a>
      <a href="/private/private-home/menu" className={`nav-link flex-row gap-3 ${pathname === '/private/private-home/menu' ? 'active' : ''}`}>
        <FontAwesomeIcon className='icons' icon={faUtensils} />
        <span className="nav-text">Menu</span>
      </a>
      <a href="/private/private-home/commande" className={`nav-link flex-row gap-3 ${pathname === '/private/private-home/commande' ? 'active' : ''}`}>
        <FontAwesomeIcon className='icons' icon={faClipboardList} />
        <span className="nav-text">Commander</span>
      </a>
      <a href="/private/private-home/contact" className={`nav-link flex-row gap-3 ${pathname === '/private/private-home/contact' ? 'active' : ''}`}>
        <FontAwesomeIcon className='icons' icon={faUser} />
        <span className="nav-text">Contacts</span>
      </a>
    </section>
  );
};

export default Navbar;
