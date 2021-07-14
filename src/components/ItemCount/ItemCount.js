import React, { Component } from 'react'
import imageL from './l.jpg';

export default class ItemCount extends Component {
    constructor(props){
        super(props)
        /*this.state es una function especial de react que cada vez que cambia
        la misma vuelve a realizar un render del componente */ 

        this.state = {
            contador: 0,
        }

        this.handleClick = this.handleClick.bind(this);
        this.restar = this.restar.bind(this);
    }

    handleClick() {
        if(this.state.contador < 5){
            this.setState({
                contador : this.state.contador+1
            });
        }
    }
    restar() {
        if (this.state.contador > 0) {
            this.setState({ 
                contador : this.state.contador-1
            });
        }
    }

    render() {
        return (
            <div>
                <img src={imageL} ></img>
                <h1>Nombre Producto</h1>
                <button onClick={this.restar}>-1</button>
                <span>{this.state.contador}</span>
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}