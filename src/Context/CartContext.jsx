import React, { createContext, useState } from "react";
import axios from "axios";
export const CartContext = createContext();

export const CartProvider = (props) => {
  const [Cart, setCart] = useState([]);
  const [CartShow, setCartShow] = useState(false);
  const [ConfirmCartShow, setConfirmCartShow] = useState(false);
  const [Checkout, setCheckout] = useState([], "tamilNadu");
  const [Items, setItems] = useState([]);
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
  const submitcart = (e) => {
    setCartShow(false);
    setConfirmCartShow(true);
    var i;
    for (i = 0; i < Cart.length; i++) {
      const st = [];
      st.push("ItemID", Cart[i].id);
      st.push("ItemName", Cart[i].product.name);
      st.push("Qty", Cart[i].qty);
      st.push("ItemPrice", Cart[i].product.constprice);
      st.push("LinePrice", Cart[i].product.constprice);
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
    console.log("...formto save...", formdata);
    const header = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .post(
        "https://fishord.herokuapp.com/saveorder",
        {
          crossDomain: false,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "access-control-allow-origin, access-control-allow-headers",

            Accept: "application/json",

            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Content-Type": "multipart/form-data",
            //"Access-Control-Allow-Headers":
            //"Origin, X-Requested-With, Content-Type, Accept, Authorization",

            withCredentials: false,
          },
        },
        formdata
      )
      .then((response) => this.setState({ formdata: response.data }));
    console.log("...formto save...", formdata);
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
        ConfirmCartShow,
        setConfirmCartShow,
      ]}
    >
      {props.children}
    </CartContext.Provider>
  );
};
