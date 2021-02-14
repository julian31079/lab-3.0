import React from 'react';

const Header = () => (
    <header className="header">
      <figure className="header__figure">
        <img
          src="../static/logoFinal.svg"
          alt="Logo"
          className="header__figure--logo"
        />
      </figure>
      <p className="header__title">Simocodal advance</p>

      <div className="header__menu">
        <img src="../static/user.svg" alt="User" className="header__menu--usricon" />
        <p>Perfil</p>
        <ul>
          <li><a>Cuenta</a></li>
          <li><a>Configuración</a></li>
          <li><a>Cerrar sesión</a></li>
        </ul>
      </div>
      
    </header>
);

export default Header;