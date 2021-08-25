import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar() {
    const [openModal, setOpenModal] = useState(false)

    return(
        <div className='nb_container'>
            <ul className='menu'>
                <li>
                    <Link to='/'>
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to='/Productos'>
                        Productos
                    </Link>
                </li>
            </ul>
            <button className="button-cart" onClick={() => setOpenModal(true)}>
                <CartWidget />
            </button>
            {openModal && (
                <div className="moda-cart-container">
                    <div>
                    <p>Producto</p>
                    <p>Precio</p>
                    </div>
                    <button onClick={() => setOpenModal(false)}>Cerrar</button>
                    <Link to='/Carrito'>
                        Finalizar Pedido
                    </Link>
                </div>
            )}
        </div>
    )
};