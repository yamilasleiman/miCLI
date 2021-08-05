import React from 'react';
import { useCartContext } from '../Contex';

const Cart = () => {
  const { cartItems } = useCartContext();
  console.log(cartItems);
  return (
    <>
      <h1>Cart</h1>
      {cartItems.length > 0 &&
        cartItems.map((item, index) => (
          <p key={index}>
            {item.title} x {item.qty}
          </p>
        ))}
    </>
  );
};

export default Cart;
