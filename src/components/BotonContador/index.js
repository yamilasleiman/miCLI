import React, { useState } from 'react';

export default function ItemCount({ max, min, stock }) {
    const [count, setCount] = useState(0);

    const restar = () => {
        if(count >= min){
            return setCount(count - 1)
        };
    }

    const sumar = () => {
        if(count < max ){
            return setCount(count + 1) 
        };
    }

    return (
        <div>
            <button className="item-button" onClick={restar}>-</button>
            <span>{count}</span>
            <button className="item-button" onClick={sumar}>+</button>
            <button className="item-button"> 
            Agregar al carrito</button>
        </div>
    )
}

