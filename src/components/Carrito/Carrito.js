import React from 'react';
import { useCartContext } from '../Contex';

const Carrito = () =>{
    const { cartItems } = useCartContext();
    return (
        <>
          <h1>Cart</h1>
          {cartItems.length > 0 &&
            cartItems.map((item, index) => (
              <p key={index}>
                {item.title}
              </p>
            ))}
        </>
      );
};

export default Carrito;