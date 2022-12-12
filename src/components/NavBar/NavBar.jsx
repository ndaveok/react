import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        <li>
          <Link to="/">
            <h2>La Taberna de Blitz</h2>
          </Link>
        </li>
        <li>
          <Link to="/category/Manuales">Manuales</Link>
        </li>
        <li>
          <Link to="/category/Dados">Dados</Link>
        </li>
        <li>
          <Link to="/category/Miniaturas">Miniaturas</Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;