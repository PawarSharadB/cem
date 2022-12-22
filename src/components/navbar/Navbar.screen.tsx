import React from 'react';
// Locales
import { locales } from '../../locales';
// Styles
import './navbar.styles.css';

const NavbarScreen = ({}) => {
  return (
    <div className='nav-container'>
      <h1 className='title'>{locales.appTitle}</h1>
    </div>
  );
};

export default NavbarScreen;
