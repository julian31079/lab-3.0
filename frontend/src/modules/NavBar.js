import React from 'react';
import {Link} from 'react-router-dom';
import 'bootswatch/dist/lux/bootstrap.min.css'
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">SICOMOAL ADVANCE V1.0</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/createUser">Crear usuario <span className="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default NavBar;