import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [Cart, setCart] = useState([]);
  const [CartShow, setCartShow] = useState(false);

  const addToCart = (product) => {
    console.log("adding product ", product.id);
    setCart((previousState) => [
      ...previousState,
      { id: product.id, qty: 5, product: product },
    ]);
  };
  const removeFromCart = (product) => {
    console.log("removing product ", product);
  };
  return (
    <CartContext.Provider
      value={[Cart, setCart, addToCart, removeFromCart, CartShow, setCartShow]}
    >
      {props.children}
    </CartContext.Provider>
  );
};
