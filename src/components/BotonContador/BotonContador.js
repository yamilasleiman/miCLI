import React, { useState } from 'react';
import { useCartContext } from '../Contex';


export default function ItemCount({ stock, add }) {
    const [count, setCount] = useState(0);
    
    const { addToCart } = useCartContext();

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
        <div className="BC">
            <div className="contador">
                <button className="item-button" onClick={restar}>-</button>
                <span>{count}</span>
                <button className="item-button" onClick={sumar}>+</button>
            </div>
            <button class="button"
            onClick={() => addToCart (count)}>
	            Agregar al carrito
	            <div className="button__horizontal"></div>
	            <div className="button__vertical"></div>
            </button>
        </div>
    )
}

