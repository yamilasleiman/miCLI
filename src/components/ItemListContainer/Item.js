import React, { useState } from 'react';

export default function ItemCount(props) {
    const [count, setCount] = useState(1);

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
            <img src={props.image} ></img>
            <h2>{props.tittle}</h2>
            <p>{props.price}</p>
            <p>{props.description}</p>
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
            <button>Agregar al carrito</button>
        </div>
    )
}