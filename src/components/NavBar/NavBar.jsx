import React from 'react'
import CartWidget from './CartWidget'
import "./NavBar.css"
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav className='nav-menu'>
            <ul className='nav-list'>
                <li>
                  <Link to="/">
                  <h2> La Tienda de Blitz </h2>
                  </Link>
                </li>
                <li>
                    <Link to="/categoria/Drama">Drama</Link>
                </li>
                <li>
                    <Link to="/categoria/Comedy">Comedia</Link>
                </li>
                <li>
                    <Link to="/"> Dados </Link>
                </li>
                <li>
                    <Link to="/"> Miniaturas </Link>
                </li>
                <li>
                    <CartWidget/>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar