import React, { useState } from 'react';

export default function ItemCount({ stock, add }) {
    const [count, setCount] = useState(0);

    const restar = () => {
        if(count > 0){
            return setCount(count - 1)
        };
    }

    const sumar = () => {
        if(count < stock ){
            return setCount(count + 1) 
        };
    }

    return (
        <div>
            <button className="item-button" onClick={restar}>-</button>
            <span>{count}</span>
            <button className="item-button" onClick={sumar}>+</button>
            <button
                className="item-button"
                onClick={add}
            > 
            Agregar al carrito</button>
        </div>
    )
}

