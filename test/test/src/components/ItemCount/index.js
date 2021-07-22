import React, { useState } from 'react';
import imageL from './l.jpg';

export default function ItemCount() {
    const [count, setCount] = useState(0);

    const restar = () => {
        if(count > 0){
            return setCount(count - 1)
        };
    }

    const sumar = () => {
        if(count < 5 ){
            return setCount(count + 1) 
        };
    }

    return (
        <div>
            <img src={imageL} ></img>
            <h1>Nombre Producto</h1>
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
            <button>Agregar al carrito</button>
        </div>
    )
}

