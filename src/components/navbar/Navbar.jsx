import React from 'react';
import Logo from '../../assets/x.svg';
import './navbar.css';

const Navbar = () => (
    <nav class="menu-nav">
      <div class="menu-icon">
        <img src={Logo} alt="" />
      </div>
      <div class="menu-ligne">MICKAEL OLANIER</div>
      <div class="menu-items">
        <a class="menu-item" href="#Accueil">Accueil</a>
        <a class="menu-item" href="#presentation">Presentation</a>
        <a class="menu-item" href="#prestation">Prestation</a>
        <a class="menu-item" href="#contact">Me Contacter</a>
      </div>
  </nav>
);

export default Navbar;