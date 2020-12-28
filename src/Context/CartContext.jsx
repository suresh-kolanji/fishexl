import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [Cart, setCart] = useState([
    {
      id: 1,
      qty: 3,
    },
    {
      id: 2,
      qty: 5,
    },
  ]);

  return (
    <CartContext.Provider value={[Cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
