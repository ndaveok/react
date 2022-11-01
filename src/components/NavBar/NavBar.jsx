import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <h2> La Tienda de Blitz </h2>
                </li>
                <li>
                    <a href="/">Historia</a>
                </li>
                <li>
                    <a href="/">Manuales</a>
                </li>
                <li>
                    <a href="/"> Dados </a>
                </li>
                <li>
                    <a href="/"> Miniaturas </a>
                </li>
                <li>
                    <CartWidget/>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar