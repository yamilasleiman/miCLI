import React, { Component } from 'react';


export default class NavBar extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        
        console.log(props);
    }

    render() {
        return(
            <div className='nb_container'>
                <label>YAMILA</label>
                <ul className='menu'>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Comprar</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>
        )
    }
};