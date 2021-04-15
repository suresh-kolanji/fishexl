import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [Cart, setCart] = useState([]);
  const [CartShow, setCartShow] = useState(false);
  const [Checkout, setCheckout] = useState([], "tamilNadu");
  const addToCart = (product) => {
    console.log("adding product ", product.id);
    setCart((previousState) => [
      ...previousState,
      { id: product.id, qty: 5, product: product },
    ]);
  };
  const removefromcart = (product) => {
    console.log("removing product ", product);
    const lCart = Cart.filter((item) => item.id !== product.id);
    setCart(lCart);
    console.log("---new---", Cart);
  };
  const submitcart = (e) => {
    console.log("saving Cart --->", Cart);
    console.log("saving Cart --->", Checkout);
  };

  return (
    <CartContext.Provider
      value={[
        Cart,
        setCart,
        addToCart,
        removefromcart,
        CartShow,
        setCartShow,
        submitcart,
        Checkout,
        setCheckout,
      ]}
    >
      {props.children}
    </CartContext.Provider>
  );
};
