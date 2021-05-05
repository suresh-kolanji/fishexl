import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const CartContext = createContext();

export const CartProvider = (props) => {
  const [Cart, setCart] = useState([]);
  const [CartShow, setCartShow] = useState(false);
  const [ConfirmCartShow, setConfirmCartShow] = useState(false);
  const [Checkout, setCheckout] = useState([], "tamilNadu");
  const [Items, setItems] = useState([]);
  const [OrderDetail, setOrderDetail] = useState([]);
  const addToCart = (product) => {
    console.log("------add to cart -----", product);
    setCart((previousState) => [
      ...previousState,
      { id: product.id, qty: 5, product: product },
    ]);
  };

  const removefromcart = (product) => {
    const lCart = Cart.filter((item) => item.id !== product.id);
    setCart(lCart);
  };

  const resetCart = (ord) => {
    console.log("invoked");
    setConfirmCartShow(false);
  };

  const Submitcart = (e) => {
    setCartShow(false);

    var i;
    for (i = 0; i < Cart.length; i++) {
      const st = {
        ItemID: Cart[i].id,
        ItemName: Cart[i].product.name,
        ItemDesc: Cart[i].product.description,
        Qty: Cart[i].qty,
        ItemPrice: Cart[i].product.constprice,
        LinePrice: Cart[i].product.constprice,
      };

      Items.push(st);
    }
    const formdata = {
      Email: Checkout.email,
      TotalPrice: Cart.map((datum) => datum.product.constprice).reduce(
        (a, b) => a + b,
        0
      ),
      PhoneNo: Checkout.phNumber,
      Address1: Checkout.address1,
      Address2: Checkout.address2,
      PostalCode: Checkout.zipCode,
      State: "Tamil Nadu",
      City: Checkout.city,
      Name: Checkout.username,
      OrderItems: Items,
    };
    console.log("...formto save...", JSON.stringify(formdata));
    axios
      .post("http://localhost:8080/saveorder", JSON.stringify(formdata))
      .then((response) => {
        OrderDetail.push(response.data);
        setConfirmCartShow(true);
        setCart([]);
      });
    console.log("outside", OrderDetail);
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
        Submitcart,
        Checkout,
        setCheckout,
        ConfirmCartShow,
        setConfirmCartShow,
        OrderDetail,
        setOrderDetail,
        resetCart,
      ]}
    >
      {props.children}
    </CartContext.Provider>
  );
};
