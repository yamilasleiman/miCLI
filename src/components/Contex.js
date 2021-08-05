/*import React, { useContext, useState } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, qty) => {
    if (cartItems.some(product => product.title === item.title)) {
      const copy = [...cartItems];
      const repeteadIndex = cartItems.findIndex(
        product => product.title === item.title
      );
      copy[repeteadIndex] = {
        ...copy[repeteadIndex],
        qty: copy[repeteadIndex].qty + qty
      };
      setCartItems(copy);
    } else {
      setCartItems([...cartItems, { ...item, qty }]);
    }
    setCartCount(prev => prev + qty);
  };

  return (
    <CartContext.Provider value={{ cartCount, cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;



/*

COUNTER
import React from 'react';

const Counter = ({ count, sub, add, condition }) => {
  return (
    <>
      <button
        className="btn btn-danger"
        onClick={sub}
        style={{ margin: 10 }}
        disabled={condition || count === 0}
      >
        -
      </button>
      <h5>{count}</h5>
      <button
        className="btn btn-success"
        onClick={add}
        style={{ margin: 10 }}
        disabled={condition || count === 5}
      >
        +
      </button>
    </>
  );
};
export default Counter;
*/