import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='nb_container'>
                <ul className='menu'>
                    <li>
                        <Link to='/'>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to='/productos'>
                            Productos
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            Carrito
                        </Link>
                    </li>
                </ul>
                <CartWidget/>
            </div>
        )
    }
};