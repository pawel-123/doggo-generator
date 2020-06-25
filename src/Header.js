import React from 'react';
import logo from './logo.png';
import './App.css';

function Header() {
  return (
    <header>
      <img src={logo} alt='Doggo Generator logo' />
      <h1>DOGGO GENERATOR</h1>
    </header>
  );
}

export default Header;
